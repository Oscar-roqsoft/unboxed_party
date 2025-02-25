import {
  defineComponent,
  openBlock,
  createElementBlock,
  normalizeClass,
  createElementVNode,
  toDisplayString,
} from "vue";

var script = /*#__PURE__*/ defineComponent({
  name: "Vue3Paystack",
  // vue component name
  props: {
    // styles
    buttonClass: {
      type: String,
      default: "",
    },
    buttonText: {
      type: String,
      default: "",
    },
    // payment operations
    publicKey: {
      type: String,
      requird: true,
    },
    //required
    email: {
      type: String,
      required: true,
    },
    //required
    amount: {
      type: Number,
      required: true,
    },
    //required
    reference: {
      type: String,
      required: true,
    },
    //required
    currency: {
      type: String,
      default: "NGN",
    },
    onSuccess: {
      type: Function,
      default: function (response) {
        // console.log(response);
      },
    },
    onCancel: {
      type: Function,
      default: function () {
        // console.log("payment closed");
      },
    },
    channels: {
      type: Array,
      default: function () {
        return ["card", "bank", "ussd", "qr", "mobile_money"];
      },
    },
    metadata: {
      type: Object,
      default: function () {
        return {};
      },
    },
    label: {
      type: String,
      default: "",
    },
    subaccount: {
      type: String,
      default: "",
    },
    transaction_charge: {
      type: Number,
      default: 0,
    },
    bearer: {
      type: String,
      default: "",
    },
  },

  async created() {
    this.mountScript().then(() => {
      this.hasScriptLoaded = true;
    });
  },

  data() {
    return {
      hasScriptLoaded: false,
    };
  },

  methods: {
    async mountScript() {
      return new Promise((res, rej) => {
        const script = document.createElement("script"); //  add script source

        script.setAttribute("src", "https://js.paystack.co/v2/inline.js");
        script.setAttribute("type", "text/javascript");
        document.head.appendChild(script); // check if script is ready

        script.onload = () => res();

        script.onerror = () => rej();
      });
    },

    payWithPaystack() {
      //  options
      const paymentOptions = {
        // general options
        key: this.publicKey,
        //required
        email: this.email,
        //required
        amount: this.amount,
        //required
        reference: this.reference,
        //required
        currency: this.currency,
        channels: this.channels,
        metadata: this.metadata,
        label: this.label,
        onSuccess: (response) => {
          this.onSuccess(response);
        },
        onCancel: () => {
          this.onCancel();
        },
      };
      if (this.subaccount) {
        paymentOptions.subaccount = this.subaccount;
      }
      if (this.transaction_charge) {
        paymentOptions.transaction_charge = this.transaction_charge;
      }
      if (this.bearer) {
        paymentOptions.bearer = this.bearer;
      }

      const paystack = new window.PaystackPop();
      paystack.newTransaction(paymentOptions);
    },
  },
});

const _hoisted_1 = ["disabled"];
// function render(_ctx, _cache, $props, $setup, $data, $options) {
function render(_ctx, _cache) {
  return (
    openBlock(),
    createElementBlock(
      "button",
      {
        disabled: !_ctx.hasScriptLoaded,
        class: normalizeClass(_ctx.buttonClass),
        onClick:
          _cache[0] ||
          (_cache[0] = (...args) =>
            _ctx.payWithPaystack && _ctx.payWithPaystack(...args)),
      },
      [createElementVNode("span", null, toDisplayString(_ctx.buttonText), 1)],
      10,
      _hoisted_1
    )
  );
}

script.render = render;

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/ (() => {
  // Get component instance
  const installable = script; // Attach install function executed by Vue.use()

  installable.install = (app) => {
    app.component("Vue3Paystack", installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export { entry_esm as default };
