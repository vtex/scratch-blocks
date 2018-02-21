/**
 * @fileoverview VTEX blocks for Scratch (Horizontal)
 * @author cauli.tomaz@vtex.com <Cauli Tomaz>
 */
'use strict';

goog.provide('Blockly.Blocks.vtex');



goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['vtex_when_teaser'] = {
  /**
   * Block for when flag clicked.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "vtex_when_teaser",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/event_whenflagclicked.svg",
          "width": 40,
          "height": 40,
          "alt": "When green flag clicked",
          "flip_rtl": true
        }
      ],
      "inputsInline": true,
      "nextStatement": null,
      "category": Blockly.Categories.event,
      "colour": Blockly.Colours.event.primary,
      "colourSecondary": Blockly.Colours.event.secondary,
      "colourTertiary": Blockly.Colours.event.tertiary
    });
  }
};


Blockly.Blocks['vtex_control_group'] = {
  /**
   * Block for repeat n times (external number).
   * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#5eke39
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "vtex_control_group",
      "message0": "group",
      "message1": "%1", // Statement
      "message2": "%1", // Icon
      "lastDummyAlign2": "RIGHT",
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args2": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/vtex/control/parenthesis.svg",
          "width": 24,
          "height": 24,
          "alt": "*",
          "flip_rtl": true
        }
      ],
      "category": Blockly.Categories.control,
      "extensions": ["colours_control", "shape_statement"]
    });
  }
};

Blockly.Blocks['vtex_operator_and'] = {
    /**
   * Block for repeat n times (external number).
   * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#5eke39
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "vtex_operator_and",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/vtex/operators/and.svg",
          "width": 40,
          "height": 40,
          "alt": "AND",
          "flip_rtl": true
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": "AND",
      "category": Blockly.Categories.operators,
      "colour": Blockly.Colours.operators.primary,
      "colourSecondary": Blockly.Colours.operators.secondary,
      "colourTertiary": Blockly.Colours.operators.tertiary
    });
  }
};

Blockly.Blocks['vtex_operator_or'] = {
  /**
   * Block for repeat n times (external number).
   * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#5eke39
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "vtex_operator_or",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/vtex/operators/or.svg",
          "width": 30,
          "height": 30,
          "alt": "O",
          "flip_rtl": true
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": "OR",
      "category": Blockly.Categories.operators,
      "colour": Blockly.Colours.operators.primary,
      "colourSecondary": Blockly.Colours.operators.secondary,
      "colourTertiary": Blockly.Colours.operators.tertiary
    });
  }
};

Blockly.Blocks['vtex_operator_not'] = {
  /**
   * Block for repeat n times (external number).
   * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#5eke39
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "vtex_operator_or",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/vtex/operators/not.svg",
          "width": 40,
          "height": 40,
          "alt": "NOT",
          "flip_rtl": true
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": "NOT",
      "category": Blockly.Categories.operators,
      "colour": Blockly.Colours.operators.primary,
      "colourSecondary": Blockly.Colours.operators.secondary,
      "colourTertiary": Blockly.Colours.operators.tertiary
    });
  }
};


Blockly.Blocks['vtex_when_evaluate_teaser'] = {
  /**
   * Block for when broadcast received.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "vtex_when_evaluate_teaser",
      "message0": "when I evaluate a teaser",
      "category": Blockly.Categories.event,
      "extensions": ["colours_event", "shape_hat"]
    });
  }
};


Blockly.Blocks['vtex_payment_method'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "vtex_payment_method",
      "message0": "Payment method is %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "IS",
          "options": [
            ['American Express (1)', '1'],
            ['Diners (2)', '2'],
            ['Visa (3)', '3'],
            ['Mastercard (4)', '4'],
            ['Boleto (6)', '6'],
            ['Cartao Cencosud (501)', '501']
          ]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};

Blockly.Blocks['vtex_payment_bin'] = {
  /**
   * Block to set color of LED
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "vtex_payment_bin",
      "message0": "BIN %1 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "IS",
          "options": [
            ['is', '_is_'],
            ['is not', '_is_not_']
          ]
        },
        {
          "type": "input_value",
          "name": "BIN",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};

Blockly.Blocks['vtex_payment_installments'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "vtex_payment_installments",
      //"mutator": "mutator_range",
      "message0": "Installment is %1 %2 and %3",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "comparison",
          "options": [
            ['greater than', '_is_greater_than_'],
            ['greater or equal than', '_is_greater_or_equal_than_'],
            ['smaller than', '_is_smaller_than_'],
            ['smaller or equal than', '_is_smaller_or_equal_than_'],
            ['equal', '_is_equal_'],
            ['not equal', '_is_not_equal_'],
            ['not between', '_is_not_between_'],
            ['between', '_is_between_']
          ]
        },
        {
          "type": "input_value",
          "name": "BIN_LOWER_BOUND",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "BIN_UPPER_BOUND",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};


Blockly.Blocks['vtex_payment_bin_range'] = {
  /**
   * Block to set color of LED
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "vtex_payment_bin_range",
      "message0": "BIN %1 between %2 and %3",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "IS",
          "options": [
            ['is', '_is_'],
            ['is not', '_is_not_']
          ]
        },
        {
          "type": "input_value",
          "name": "BIN_LOWER_BOUND",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "BIN_UPPER_BOUND",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};

Blockly.Blocks['vtex_dropdown_paymentmethod'] = {
  /**
   * Block for set color drop-down (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldIconMenu([

          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/vtex/payment-colored/svg/cash.svg',
            value: 'cash', width: 48, height: 48, alt: 'cash'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/vtex/payment-colored/svg/barcode.svg',
            value: 'barcode', width: 48, height: 48, alt: 'barcode'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/vtex/payment-colored/svg/visa.svg',
            value: 'visa', width: 48, height: 48, alt: 'visa'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/vtex/payment-colored/svg/amex.svg',
            value: 'amex', width: 48, height: 48, alt: 'amex'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/vtex/payment-colored/svg/apple.svg',
            value: 'apple', width: 48, height: 48, alt: 'apple'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/vtex/payment-colored/svg/bitcoin.svg',
            value: 'bitcoin', width: 48, height: 48, alt: 'bitcoin'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/vtex/payment-colored/svg/diners-club.svg',
            value: 'diners-club', width: 48, height: 48, alt: 'diners-club'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/vtex/payment-colored/svg/mastercard.svg',
            value: 'mastercard', width: 48, height: 48, alt: 'mastercard'},
          {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/vtex/payment-colored/svg/paypal.svg',
            value: 'paypal', width: 48, height: 48, alt: 'paypal'}
        ]), 'CHOICE');
    this.setOutput(true);
    this.setColour(Blockly.Colours.looks.primary,
      Blockly.Colours.looks.secondary,
      Blockly.Colours.looks.tertiary
    );
  }
};

Blockly.Blocks['wedo_setcolor'] = {
  /**
   * Block to set color of LED
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_setcolor",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/set-led_blue.svg",
          "width": 40,
          "height": 40,
          "alt": "Set LED Color"
        },
        {
          "type": "input_value",
          "name": "CHOICE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};

Blockly.Blocks['wedo_motorclockwise'] = {
  /**
   * Block to spin motor clockwise.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_motorclockwise",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/wedo_motor-clockwise.svg",
          "width": 40,
          "height": 40,
          "alt": "Turn motor clockwise"
        },
        {
          "type": "input_value",
          "name": "DURATION",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": Blockly.Colours.motion.primary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary
    });
  }
};

Blockly.Blocks['wedo_motorcounterclockwise'] = {
  /**
   * Block to spin motor counter-clockwise.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_motorcounterclockwise",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/wedo_motor-counterclockwise.svg",
          "width": 40,
          "height": 40,
          "alt": "Turn motor counter-clockwise"
        },
        {
          "type": "input_value",
          "name": "DURATION",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": Blockly.Colours.motion.primary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary
    });
  }
};

Blockly.Blocks['dropdown_wedo_motorspeed'] = {
  /**
   * Block for motor speed drop-down (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldIconMenu([
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/wedo_motor-speed_slow.svg',
              value: 'slow', width: 48, height: 48, alt: 'Slow'},
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/wedo_motor-speed_med.svg',
              value: 'medium', width: 48, height: 48, alt: 'Medium'},
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/wedo_motor-speed_fast.svg',
              value: 'fast', width: 48, height: 48, alt: 'Fast'}
        ]), 'CHOICE');
    this.setOutput(true);
    this.setColour(Blockly.Colours.motion.primary,
      Blockly.Colours.motion.secondary,
      Blockly.Colours.motion.tertiary
    );
  }
};

Blockly.Blocks['wedo_motorspeed'] = {
  /**
   * Block to set motor speed.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_motorspeed",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/wedo_motor-speed_fast.svg",
          "width": 40,
          "height": 40,
          "alt": "Motor Speed"
        },
        {
          "type": "input_value",
          "name": "CHOICE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": Blockly.Colours.motion.primary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary
    });
  }
};

Blockly.Blocks['dropdown_wedo_whentilt'] = {
  /**
   * Block for when tilt drop-down (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldIconMenu([
            {type: 'placeholder', width: 48, height: 48},
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/wedo_when-tilt-forward.svg',
              value: 'forward', width: 48, height: 48, alt: 'Tilt forward'},
            {type: 'placeholder', width: 48, height: 48},
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/wedo_when-tilt-left.svg',
              value: 'left', width: 48, height: 48, alt: 'Tilt left'},
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/wedo_when-tilt.svg',
              value: 'any', width: 48, height: 48, alt: 'Tilt any'},
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/wedo_when-tilt-right.svg',
                value: 'right', width: 48, height: 48, alt: 'Tilt right'},
            {type: 'placeholder', width: 48, height: 48},
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/wedo_when-tilt-backward.svg',
                value: 'backward', width: 48, height: 48, alt: 'Tilt backward'}
        ]), 'CHOICE');
    this.setOutput(true);
    this.setColour(Blockly.Colours.event.primary,
      Blockly.Colours.event.secondary,
      Blockly.Colours.event.tertiary
    );
  }
};

Blockly.Blocks['wedo_whentilt'] = {
  /**
   * Block for when tilted.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_whentilt",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/wedo_when-tilt.svg",
          "width": 40,
          "height": 40,
          "alt": "When tilted"
        },
        {
          "type": "input_value",
          "name": "CHOICE"
        }
      ],
      "inputsInline": true,
      "nextStatement": null,
      "category": Blockly.Categories.event,
      "colour": Blockly.Colours.event.primary,
      "colourSecondary": Blockly.Colours.event.secondary,
      "colourTertiary": Blockly.Colours.event.tertiary
    });
  }
};

Blockly.Blocks['wedo_whendistanceclose'] = {
  /**
   * Block for when distance sensor is close.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "wedo_whendistanceclose",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/wedo_when-distance_close.svg",
          "width": 40,
          "height": 40,
          "alt": "When distance close"
        }
      ],
      "inputsInline": true,
      "nextStatement": null,
      "category": Blockly.Categories.event,
      "colour": Blockly.Colours.event.primary,
      "colourSecondary": Blockly.Colours.event.secondary,
      "colourTertiary": Blockly.Colours.event.tertiary
    });
  }
};



// // JS expects a mixin with all of the required methods
// Blockly.Extensions.registerMutator('mutator_range',
//   null, null,
//   // This last argument configures the editor UI on web
//   [null]);
