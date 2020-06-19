$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Resources/random_date_generator.feature");
formatter.feature({
  "name": "Random Date Generator",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Number of random date to generate corresponds to the number in how many date to generate field",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the random date generator page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_am_on_random_generator_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \u002721\u0027 for the number of date option",
  "keyword": "When "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_enter_number_for_the_number_of_date_option(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can see \u002721\u0027 dates are generated",
  "keyword": "Then "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_can_see_dates_are_generated(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate random Dates button keep generating new dates",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the random date generator page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_am_on_random_generator_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \u00271\u0027 for the number of date option",
  "keyword": "And "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_enter_number_for_the_number_of_date_option(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \u0027generate random Dates\u0027 button",
  "keyword": "When "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_click_generate_random_date_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a new set of date is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.a_new_set_of_data_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate date in different format",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the random date generator page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_am_on_random_generator_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \u00271\u0027 for the number of date option",
  "keyword": "And "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_enter_number_for_the_number_of_date_option(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide a date format \u0027Year Month Date hh:mm:ss\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_provide_a_date_format(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can see the date generated in \u0027Year Month Date hh:mm:ss\u0027 format",
  "keyword": "Then "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_can_see_date_in_year_month_format(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Not providing custom date format when output date format is set to custom date format",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the random date generator page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_am_on_random_generator_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \u00271\u0027 for the number of date option",
  "keyword": "And "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_enter_number_for_the_number_of_date_option(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide a date format \u0027Custom date format\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_provide_a_date_format(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clear the custom date format field",
  "keyword": "And "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_clear_the_Custom_date_format_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \u0027generate random Dates\u0027 button",
  "keyword": "And "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_click_generate_random_date_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "no random dates are generated",
  "keyword": "Then "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.no_random_dates_are_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate custom Date format",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the random date generator page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_am_on_random_generator_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \u00271\u0027 for the number of date option",
  "keyword": "And "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_enter_number_for_the_number_of_date_option(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide custom date format \u0027YYYY#MM#DD\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_provide_custom_date_format(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can see the date generated in this format",
  "keyword": "Then "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_can_see_date_generated_in_this_format()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "All date generated are of same format which is set in output date format",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the random date generator page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_am_on_random_generator_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \u00273\u0027 for the number of date option",
  "keyword": "And "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_enter_number_for_the_number_of_date_option(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide a date format \u0027Year Month Date hh:mm:ss\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_provide_a_date_format(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can see the date generated in \u0027Year Month Date hh:mm:ss\u0027 format",
  "keyword": "Then "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_can_see_date_in_year_month_format(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Changing date format updated the result with the format selected",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the random date generator page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_am_on_random_generator_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \u00271\u0027 for the number of date option",
  "keyword": "And "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_enter_number_for_the_number_of_date_option(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide a date format \u0027Year Month Date hh:mm:ss\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_provide_a_date_format(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can see the date generated in \u0027Year Month Date hh:mm:ss\u0027 format",
  "keyword": "Then "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_can_see_date_in_year_month_format(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide a date format \u0027ISO 8601\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_provide_a_date_format(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can see the date generated in \u0027ISO 8601\u0027 format",
  "keyword": "Then "
});
formatter.match({
  "location": "steps_defs.RandomDateGeneratorSteps.i_can_see_date_in_year_month_format(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});