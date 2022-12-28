module.exports = {
  apiSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Introduction',
        slug: '/',
      },
      items: [
        'goals',
        'anti-goals',
        'json-rpc',
        'pagination',
        'outstanding-questions',
      ],
    },
    {
      type: 'category',
      label: 'Request/Response Methods',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Request/Response Methods',
        slug: 'methods',
      },
      items: [
        'methods/getAccount',
        'methods/getHealth',
        'methods/getLatestLedger',
        'methods/getLedgerEntry',
        'methods/getContractData',
        'methods/getEvents',
        'methods/getNetwork',
        'methods/getTransactionStatus',
        'methods/requestAirdrop',
        'methods/sendTransaction',
        'methods/simulateTransaction',
      ],
    },
  ],
};