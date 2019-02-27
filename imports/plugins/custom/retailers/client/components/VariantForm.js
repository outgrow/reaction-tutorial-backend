import React from "react";
import { getRawComponent, replaceComponent, Components } from "@reactioncommerce/reaction-components";
import classnames from "classnames";
import { findCurrency } from "/client/api";

const VariantForm = getRawComponent("VariantForm");

class CustomVariantForm extends VariantForm {
  renderOptionFields() {
    const cardName = `variant-${this.variant._id}`;

    const classNames = classnames({
      "variant-option-card": true,
      "active": this.isExpanded(cardName)
    });

    const currency = findCurrency(null, true);

    return (
      <Components.CardGroup>
        <Components.Card
          className={classNames}
          expandable={true}
          expanded={this.isExpanded(cardName)}
          name={cardName}
          onExpand={this.handleCardExpand}
        >
          <Components.CardHeader
            actAsExpander={true}
            title={this.variant.optionTitle || "Label is required"}
            isValid={this.props.validation.isValid}
          >
            {this.renderArchivedLabel()}
            <Components.Button
              icon="files-o"
              className="rui btn btn-default btn-clone-variant flat"
              tooltip="Duplicate"
              onClick={() => this.props.cloneVariant(this.variant)}
            />
            <Components.VisibilityButton
              onClick={() => this.handleVariantVisibilityToggle(this.variant)}
              bezelStyle="flat"
              primary={false}
              toggleOn={this.variant.isVisible}
            />
            {this.renderArchiveButton()}
          </Components.CardHeader>
          <Components.CardBody expandable={true}>
            <Components.TextField
              i18nKeyLabel="productVariant.optionTitle"
              i18nKeyPlaceholder="productVariant.optionTitle"
              placeholder="optionTitle"
              label="Short Label"
              name="optionTitle"
              ref="optionTitleInput"
              value={this.variant.optionTitle}
              onBlur={this.handleFieldBlur}
              onChange={this.handleFieldChange}
              onReturnKeyDown={this.handleFieldBlur}
              validation={this.props.validation}
              helpText={"Displayed on Product Detail Page"}
              i18nKeyHelpText={"admin.helpText.optionTitle"}
            />
            <Components.TextField
              i18nKeyLabel="productVariant.title"
              i18nKeyPlaceholder="productVariant.title"
              placeholder="Label"
              label="Label"
              name="title"
              ref="titleInput"
              value={this.variant.title}
              onBlur={this.handleFieldBlur}
              onChange={this.handleFieldChange}
              onReturnKeyDown={this.handleFieldBlur}
              validation={this.props.validation}
              helpText={"Displayed in cart, checkout, and orders"}
              i18nKeyHelpText={"admin.helpText.title"}
            />
            <div className="row">
              <div className="col-sm-6">
                <Components.NumericInput
                  i18nKeyLabel="productVariant.price"
                  i18nKeyPlaceholder="0.00"
                  placeholder="0.00"
                  label="Price"
                  name="price"
                  ref="priceInput"
                  value={this.variant.price}
                  format={currency}
                  numericType="currency"
                  style={this.props.greyDisabledFields(this.variant)}
                  disabled={this.props.hasChildVariants(this.variant)}
                  onBlur={this.handleFieldBlur}
                  onChange={this.handleFieldChange}
                  onReturnKeyDown={this.handleFieldBlur}
                  validation={this.props.validation}
                  helpText={"Purchase price"}
                  i18nKeyHelpText={"admin.helpText.price"}
                />
              </div>
              <div className="col-sm-6">
                <Components.NumericInput
                  i18nKeyLabel="productVariant.compareAtPrice"
                  i18nKeyPlaceholder="0.00"
                  placeholder="0.00"
                  label="Compare At Price"
                  name="compareAtPrice"
                  ref="compareAtPriceInput"
                  value={this.variant.compareAtPrice}
                  format={currency}
                  numericType="currency"
                  onBlur={this.handleFieldBlur}
                  onChange={this.handleFieldChange}
                  onReturnKeyDown={this.handleFieldBlur}
                  validation={this.props.validation}
                  helpText={"Original price or MSRP"}
                  i18nKeyHelpText={"admin.helpText.compareAtPrice"}
                />
              </div>
            </div>

            <div className="row">
              {this.renderQuantityField()}
              {this.renderInventoryPolicyField()}
            </div>
            <div className="row">
              <div className="col-sm-6">
                <Components.TextField
                  i18nKeyLabel="productVariant.width"
                  i18nKeyPlaceholder="0"
                  placeholder="0"
                  label="Width"
                  name="width"
                  ref="widthInput"
                  value={this.variant.width}
                  onBlur={this.handleFieldBlur}
                  onChange={this.handleFieldChange}
                  onReturnKeyDown={this.handleFieldBlur}
                  validation={this.props.validation}
                />
              </div>
              <div className="col-sm-6">
                <Components.TextField
                  i18nKeyLabel="productVariant.length"
                  i18nKeyPlaceholder="0"
                  placeholder="0"
                  label="Length"
                  name="length"
                  ref="lengthInput"
                  value={this.variant.length}
                  onBlur={this.handleFieldBlur}
                  onChange={this.handleFieldChange}
                  onReturnKeyDown={this.handleFieldBlur}
                  validation={this.props.validation}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <Components.TextField
                  i18nKeyLabel="productVariant.height"
                  i18nKeyPlaceholder="0"
                  placeholder="0"
                  label="Height"
                  name="height"
                  ref="heightInput"
                  value={this.variant.height}
                  onBlur={this.handleFieldBlur}
                  onChange={this.handleFieldChange}
                  onReturnKeyDown={this.handleFieldBlur}
                  validation={this.props.validation}
                />
              </div>
              <div className="col-sm-6">
                <Components.TextField
                  i18nKeyLabel="productVariant.weight"
                  i18nKeyPlaceholder="0"
                  placeholder="0"
                  label="Weight"
                  name="weight"
                  ref="weightInput"
                  value={this.variant.weight}
                  onBlur={this.handleFieldBlur}
                  onChange={this.handleFieldChange}
                  onReturnKeyDown={this.handleFieldBlur}
                  validation={this.props.validation}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <label><span>Available at retailers</span></label>


              </div>
            </div>
          </Components.CardBody>
        </Components.Card>
      </Components.CardGroup>
    );
  }
}

replaceComponent("VariantForm", CustomVariantForm);

export default CustomVariantForm;
