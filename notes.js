
$('.page footer .main-nav') // gets the footer main-nav vs the header one. we can assert things like size or color.
$('.comorbidity .field.smoking') // We can assert that the text is "Smoking" in English or "Fumma" in languages without extra attributes.

describe('should show error for commorbiditoies if only sex is supplied', () => {
  $('.medical-info .sex .male').click() //clicks the radio button for male even though we are not targeting the radio itself.
  $('.btn-submit').click();
  expect($('.comorbidity .error').getText()).toBe('You must select a commorbidity.');
  expect($('.comorbidity .error i')).toBeTruthy();
});
