Feature('Create Tasks @step:06 @smoke @story:12 @S2f5c1942')

Before(async ({ I, TodosPage }) => {
  TodosPage.goto();
});

BeforeSuite(({ I }) => {
  console.log("Test hoooks staging");
});

/**
 * Happy Path tests
 */
Scenario('Create a new todo item @T50e82737', async ({ I, TodosPage }) => {
  I.say('Given I have an empty todo list');

  I.say('When I create a todo "foo"');
  TodosPage.enterTodo('foo');

  I.say('Then I see the new todo on my list');
  TodosPage.seeNumberOfTodos(1);
});
