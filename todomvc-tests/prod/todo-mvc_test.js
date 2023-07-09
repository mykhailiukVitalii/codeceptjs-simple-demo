Feature('codepress demo @smoke-2')

Before(async ({ I }) => {
  I.amOnPage('http://todomvc.com/examples/angularjs/#/')

  I.say('Given I already have some todos')
  const todoItems = [
    {title: 'Create a cypress like runner for CodeceptJS', completed: false},
    {title: 'Make it even better than cypress', completed: false},
  ]

  I.waitForText('Double-click to edit a todo');

  I.executeScript(({ todoItems }) => {
    localStorage.setItem('todos-angularjs', JSON.stringify(todoItems));
  }, todoItems)    

  I.refreshPage()
})

Scenario('Create some todo items @smoke', async ({ I }) => {
  I.say('When I focus the todo field')
  I.waitForText('AngularJS')
})
