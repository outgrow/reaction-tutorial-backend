import Random from "@reactioncommerce/random";
import Logger from "@reactioncommerce/logger";
import getSlug from "/imports/plugins/core/core/server/Reaction/getSlug";

const colors = [
  "Blue",
  "Red",
  "Green",
  "Black",
  "White"
];

const sizes = [
  "32L",
  "34L",
  "36L",
  "38L",
  "40L",
  "42L",
  "44L",
  "46L",
  "48L",
  "50L",
  "22L",
  "54L",
  "56L",
  "58L"
];

async function populateColors(context) {
  const primaryShopId = await context.queries.primaryShopId(context.collections);
  const now = new Date();

  let colorTagId;

  const colorTag = await context.collections.Tags.findOne({
    shopId: primaryShopId,
    slug: "colors"
  });

  if (colorTag) {
    colorTagId = colorTag._id
  }

  if (!colorTag) {
    Logger.info("Couldn't find a Colors tag. Creating one...");

    const colorTagCursor = await context.collections.Tags.insertOne({
      _id: Random.id(),
      shopId: primaryShopId,
      name: "Colors",
      slug: "colors",
      type: "filter",
      isDeleted: false,
      isTopLevel: true,
      isVisible: true,
      createdAt: now,
      updatedAt: now
    });

    colorTagId = colorTagCursor.insertedId;
  }

  let colorTagCount = await context.collections.Tags.find({ relatedTagIds: [colorTagId] }).count();

  if (colorTagCount === 0) {
    colors.forEach(async (color) => {
      Logger.info(`Couldn't find a ${color} tag. Creating one...`);

      await context.collections.Tags.insertOne({
        _id: Random.id(),
        relatedTagIds: [colorTagId],
        shopId: primaryShopId,
        name: color,
        slug: getSlug(color),
        type: "filter",
        isVisible: true,
        isDeleted: false,
        isTopLevel: false,
        createdAt: now,
        updatedAt: now
      })
    });
  }
}

async function populateSizes(context) {
  const primaryShopId = await context.queries.primaryShopId(context.collections);
  const now = new Date();

  let sizeTagId;

  const sizeTag = await context.collections.Tags.findOne({
    shopId: primaryShopId,
    slug: "sizes"
  });

  if (sizeTag) {
    sizeTagId = sizeTag._id
  }

  if (!sizeTag) {
    Logger.info("Couldn't find a Sizes tag. Creating one...");

    const sizeTagCursor = await context.collections.Tags.insertOne({
      _id: Random.id(),
      shopId: primaryShopId,
      name: "Sizes",
      slug: "sizes",
      type: "filter",
      isDeleted: false,
      isTopLevel: true,
      isVisible: true,
      createdAt: now,
      updatedAt: now
    });

    sizeTagId = sizeTagCursor.insertedId;
  }

  let sizeTagCount = await context.collections.Tags.find({ relatedTagIds: [sizeTagId] }).count();

  if (sizeTagCount === 0) {
    sizes.forEach(async (size) => {
      Logger.info(`Couldn't find a ${size} tag. Creating one...`);

      await context.collections.Tags.insertOne({
        _id: Random.id(),
        relatedTagIds: [sizeTagId],
        shopId: primaryShopId,
        name: size,
        slug: getSlug(size),
        type: "filter",
        isVisible: true,
        isDeleted: false,
        isTopLevel: false,
        createdAt: now,
        updatedAt: now
      })
    });
  }
}

/**
 * @summary Called on startup
 * @param {Object} context Startup context
 * @returns {undefined}
 */
export default function startup(context) {
  populateColors(context);
  populateSizes(context);
}
