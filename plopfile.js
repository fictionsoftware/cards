module.exports = plop => {
    plop.setGenerator('component', {
      description: 'Create a component',
      // User input prompts provided as arguments to the template
      prompts: [
        {
          // Raw text input
          type: 'input',
          // Variable name for this input
          name: 'name',
          // Prompt to display on command line
          message: 'What is your component name?'
        },
      ],
      actions: [
        {
          // Add a new file
          type: 'add',
          // Path for the new file
          path: 'src/components/{{name}}/index.tsx',
          // Handlebars template used to generate content of new file
          templateFile: 'plop-templates/component.tsx.hbs',
        },
        {
            // Add a new file
            type: 'add',
            // Path for the new file
            path: 'src/components/{{name}}/index.module.scss',
            // Handlebars template used to generate content of new file
            templateFile: 'plop-templates/stylesheet.scss.hbs',
        },
        {
            // Add a new file
            type: 'add',
            // Path for the new file
            path: 'src/components/{{name}}/index.stories.tsx',
            // Handlebars template used to generate content of new file
            templateFile: 'plop-templates/storybook.tsx.hbs',
        },
      ],
    });
  };