// file: /prompts/promptUtils.js

export function getSystemPrompt() {
    return {
      role: "system",
      content: "You are a creative assistant specializing in generating unique and appetizing dish names for cooking recipes.",
    };
  }
  
  export function getUserPrompt(input) {
    return {
      role: "user",
      content: `Generate a creative dish name and a short description for a dish based on the following style or key ingredients: ${input}.`,
    };
  }
  
  export function getFunctions() {
    return [
      {
        name: "generate_dish_name",
        description: "Generate a creative dish name and a short, appetizing description.",
        parameters: {
          type: "object",
          properties: {
            dishName: {
              type: "string",
              description: "The generated name of the dish.",
            },
            description: {
              type: "string",
              description: "A short appetizing description of the dish.",
            },
          },
          required: ["dishName", "description"],
        },
      },
    ];
  }
  