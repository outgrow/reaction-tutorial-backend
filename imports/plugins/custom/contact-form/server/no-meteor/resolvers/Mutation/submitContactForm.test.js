import sinon from "sinon";
import submitContactForm from "./submitContactForm";

let sandbox;
let sendEmailSpy;

beforeAll(function() {
  sendEmailSpy = sandbox.stub(Reaction.Email, "send");
});

beforeEach(function() {
  sandbox = sinon.sandbox.create();
});

afterEach(function() {
  sandbox.restore();
});

test("correctly passes through to mutations.submitContactForm", async () => {
  const mockMutation = jest.fn().mockName("mutations.submitContactForm");
  mockMutation.mockReturnValueOnce(Promise.resolve({}));

  const context = {
    mutations: {
      submitContactForm: mockMutation
    }
  };

  const result = await submitContactForm(null, {
    input: {
      fullName: "John Doe",
      email: "john@doe.com",
      subject: "Hey",
      message: "Hello World!",
      clientMutationId: "clientMutationId"
    }
  }, context);

  expect(result).toEqual({
    clientMutationId: "clientMutationId"
  });

  expect(sendEmailSpy).to.have.been.called;
});
