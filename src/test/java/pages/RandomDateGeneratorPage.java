package pages;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.Arrays;

public class RandomDateGeneratorPage extends BasePage{
    public RandomDateGeneratorPage(WebDriver driver){
        super(driver);
    }

    @FindBy(how = How.CSS, using = "#option-count-147fe348")
    public WebElement no_of_date;

    @FindBy(how= How.CSS, using = "#option-format-147fe348")
    public WebElement select_date_format;

    @FindBy(how = How.CSS, using = "#option-custom-format-147fe348")
    public WebElement custom_date_field;

    @FindBy(how= How.CSS, using = "#option-start-147fe348")
    public WebElement start_date_field;

    @FindBy(how= How.CSS, using = "#option-end-147fe348")
    public WebElement end_date_field;

    @FindBy(how=How.CSS, using = "button.generatejson")
    public WebElement generate_random_dates_btn;

    @FindBy(how=How.CSS, using = "textarea.randomjson")
    public WebElement generated_dates;


    public void navigate_to_random_generator_page(){
        driver.get("https://codebeautify.org/generate-random-date");
    }
    public void enter_number_of_date(String number_of_date){
        enter_text(no_of_date, number_of_date);
        enter_text(start_date_field, "2020-01-18 13:00:00");
        enter_text(end_date_field, "2021-01-18 13:00:00");
    }

    public void select_date_format(String date_format){
        select_from_dropdown(select_date_format, date_format);
    }

    public void enter_custom_date_format(String custom_date_format){
        select_from_dropdown(select_date_format, "Custom date format");
        enter_text(custom_date_field, custom_date_format);
        click_generate_random_button();
    }

    public void select_a_date_format_type(String date_format){
        select_from_dropdown(select_date_format, date_format);
    }

    public void enter_start_date(String start_date){
        enter_text(start_date_field, start_date);
    }

    public void clear_custom_date_format_field(){
        clear_text_entry(custom_date_field);
    }

    public void enter_end_date(String end_date){
        enter_text(end_date_field, end_date);
    }

    public void click_generate_random_button(){
        click_element(generate_random_dates_btn);
    }

    public String get_generated_random_dates(){
        return get_value_attribute(generated_dates);
    }

    public boolean verify_date_format(String output_date_format, String date){
        String format_match_pattern = "";
        boolean format_found;
        switch(output_date_format){
            case "Year Month Date hh:mm:ss":
                format_match_pattern = "^\\d{4} [a-zA-Z]* \\d{2} \\d{2}:\\d{2}:\\d{2}";
                break;
            case "ISO 8601":
                format_match_pattern = "^\\d{4}-\\d{2}-\\d{2}[T]\\d{2}:\\d{2}:\\d{2}[Z]";
        }
        format_found = date.matches(format_match_pattern);
        return format_found;
    }

    public boolean compare_the_random_dates_generated(String prev_dates, String current_date){
        boolean new_dates_generated_flag;
        String[] prev_generated_date_arr = prev_dates.split("\n");
        String[] new_date_generated_arr = current_date.split("\n");

        new_dates_generated_flag = !(Arrays.equals(prev_generated_date_arr, new_date_generated_arr));

        return new_dates_generated_flag;
    }
}
