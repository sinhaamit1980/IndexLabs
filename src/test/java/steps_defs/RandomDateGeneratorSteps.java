package steps_defs;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.*;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import pages.PageGenerator;
import pages.RandomDateGeneratorPage;

import java.util.Arrays;

import static org.junit.Assert.*;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertEquals;

public class RandomDateGeneratorSteps {
    public PageGenerator page;
    public RandomDateGeneratorPage random_generated_page;
    String prev_generated_date = "";

    @Before
    public void scenarioLevelSetUp(){
        page = new PageGenerator(RunCucumberTest.driver);
        random_generated_page = page.GetInstance(RandomDateGeneratorPage.class);
    }

    @After
    public void scenarioLevelTearDown(Scenario scenario){
        if(scenario.isFailed()){
            final byte[] screenshot = ((TakesScreenshot) RunCucumberTest.driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png", scenario.getName());
        }

    }

    @Given("I am on the random date generator page")
    public void i_am_on_random_generator_page(){
        random_generated_page.navigate_to_random_generator_page();
    }

    @When("I enter {string} for the number of date option")
    public void i_enter_number_for_the_number_of_date_option(String number_of_date){
        random_generated_page.enter_number_of_date(number_of_date);
        prev_generated_date = random_generated_page.get_generated_random_dates();
    }

    @Then("I can see {string} dates are generated")
    public void i_can_see_dates_are_generated(String number_of_date){
        String date_generated = random_generated_page.get_generated_random_dates();
        String[] date_generated_arr = date_generated.split("\n");
        assertEquals("Number of random date generated are not equal - Expected: "+number_of_date+",  Actual: "+ date_generated_arr.length, date_generated_arr.length, Integer.parseInt(number_of_date) );
    }

    @When("I click 'generate random Dates' button")
    public void i_click_generate_random_date_btn(){
        random_generated_page.click_generate_random_button();
    }

    @Then("a new set of date is generated")
    public void a_new_set_of_data_is_generated(){
        String new_date_generated = random_generated_page.get_generated_random_dates();
        boolean new_dates_generated_flag = random_generated_page.compare_the_random_dates_generated(prev_generated_date, new_date_generated);
        assertTrue("The generated dates are same and not random", new_dates_generated_flag);
    }

    @When("I provide custom date format {string}")
    public void i_provide_custom_date_format(String date_format){
        random_generated_page.enter_custom_date_format(date_format);
    }

    @Then("I can see the date generated in this format")
    public void i_can_see_date_generated_in_this_format(){
        String new_date_generated = random_generated_page.get_generated_random_dates();
        boolean custom_format_found = new_date_generated.matches("^\\d{4}#\\d{2}#\\d{2}");
        assertTrue("The generated dates are not of custom", custom_format_found);
    }

    @When("I provide a date format {string}")
    public void i_provide_a_date_format(String date_format){
        random_generated_page.select_a_date_format_type(date_format);
    }

    @Then("I can see the date generated in {string} format")
    public void i_can_see_date_in_year_month_format(String date_format_type){
        String new_date_generated = random_generated_page.get_generated_random_dates();
        String[] new_Date_generated_arr = new_date_generated.split("\n");
        for(String dte : new_Date_generated_arr){
            boolean custom_format_found = random_generated_page.verify_date_format(date_format_type, dte);
            assertTrue("The generated date: "+ dte +" are not of format: "+date_format_type, custom_format_found);
        }
    }

    @When("I clear the custom date format field")
    public void i_clear_the_Custom_date_format_field(){
        random_generated_page.clear_custom_date_format_field();
    }

    @Then("no random dates are generated")
    public void no_random_dates_are_generated(){
        String new_date_generated = random_generated_page.get_generated_random_dates();
        boolean no_new_date_generated_flag = new_date_generated.isEmpty();
        assertTrue("The random generator are still generating new dates", no_new_date_generated_flag);
    }

}
