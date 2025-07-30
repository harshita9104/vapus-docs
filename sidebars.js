// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'tutorial-basics/vapusdocs',
        'tutorial-basics/workflow',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        {
          type: 'category',
          label: 'AI Models',
          items: [
            'tutorial-extras/aimodels',
            'tutorial-extras/walkthrough',
          ],
        },
        {
          type: 'category',
          label: 'Studio & Tools',
          items: [
            'tutorial-basics/aistudio',
            'tutorial-basics/aitools',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        // Add API docs here
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        // Add FAQ docs here
      ],
    },
  ],
};

export default sidebars;
