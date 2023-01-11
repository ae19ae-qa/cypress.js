
describe('Тестирование qa.studio', function () {

   it('Позитивный тест на верные логин и пароль', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').focus().click();
      cy.get('#messageHeader').contains('Авторизация прошла успешно');
      cy.get('#exitMessageButton > .exitIcon').click();
      cy.contains('Форма логина');
      })

   it('Восстановление пароля - ввод валидной почты', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#forgotEmailButton').click();
      cy.get('#forgotForm > .header').contains('Восстановите пароль');
      cy.get('#mailForgot').type('german@dolnikov.ru');
      cy.get('#restoreEmailButton').click;
      cy.get('#message')
      cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
      cy.get('#exitMessageButton > .exitIcon').click;
      cy.contains('Форма логина');
       })
   
   it('Негативный тест - неверный пароль', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio2');
      cy.get('#loginButton').focus().click();
      cy.get('#messageHeader').contains('Такого логина или пароля нет');
      cy.get('#exitMessageButton > .exitIcon').click();
      cy.contains('Форма логина');
      })
   
      it('Негативный тест - неверный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('erman@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').focus().click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').click();
         cy.contains('Форма логина');
         })
         
      it('Негативный тест - проверка валидации -логин без @', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').focus().click();
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
         cy.get('#exitMessageButton > .exitIcon').click();
         cy.contains('Форма логина');
         }) 
         
      it('Tест - приведение к строчным буквам в логине', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').focus().click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').click();
         cy.contains('Форма логина');
         })
               

  })
