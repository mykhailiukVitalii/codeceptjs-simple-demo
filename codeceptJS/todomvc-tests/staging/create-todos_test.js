Feature('@second Create Tasks @step:07 @smoke @story:13 @S2f5c1942')

Before(async ({ I, TodosPage }) => {
  TodosPage.goto();
});

/**
 * Happy Path tests
 */
Scenario('Create a new todo item part 2 @T5b8d1186', async ({ I, TodosPage }) => {
  I.say('Given I have an empty todo list');

  I.say('When I create a todo "foo"');
  TodosPage.enterTodo('foo');

  I.say('Then I see the new todo on my list');
  TodosPage.seeNumberOfTodos(2);
});
