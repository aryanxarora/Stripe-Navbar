const NavbarData = {
  logo: {
    name: "stripe",
    link: "/",
  },
  links: [
    {
      parent: "Products",
      children: [
        {
          name: "Payments",
          link: "/payments",
          desc: "Online payments",
        },
        {
          name: "Checkout",
          link: "/checkout",
          desc: "Checkout experience",
        },
        {
          name: "Billing",
          link: "/billing",
          desc: "Subscriptions & invoicing",
        },
        {
          name: "Connect",
          link: "/connect",
          desc: "Payments for platforms",
        },
        {
          name: "Payouts",
          link: "/payouts",
          desc: "Send money globally",
        },
        {
          name: "Radar",
          link: "/radar",
          desc: "Fraud & risk management",
        },
        {
          name: "Sigma",
          link: "/sigma",
          desc: "Custom reports",
        },
        {
          name: "Atlas",
          link: "/atlas",
          desc: "Startup incorporation",
        },
      ],
    },
    {
      parent: "Developers",
      children: [
        {
          name: "Documentation",
          link: "/documentation",
          desc: "Products and Tools",
        },
        {
          name: "Libraries and SDKs",
          link: "/lib-sdk",
          desc: "Get started in minutes",
        },
        {
          name: "App Integration",
          link: "/app-integration",
          desc: "Plugins and extensions",
        },
      ],
    },
    {
      parent: "Resources",
      children: [
        {
          name: "About",
          link: "/about",
          desc: "Our story and team",
        },
        {
          name: "Customers",
          link: "/customers",
          desc: "Who we work with",
        },
        {
          name: "Jobs",
          link: "/jobs",
          desc: "We’re hiring",
        },
        {
          name: "Blog",
          link: "/blog",
          desc: "News and updates",
        },
      ],
    },
    {
      parent: "Pricing",
      children: null,
      link: "/pricing",
    },
  ],
  action: {
    name: "Sign In",
    link: "/signin",
  },
};

export default NavbarData;
