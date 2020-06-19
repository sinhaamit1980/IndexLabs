package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BasePage extends PageGenerator {
    public BasePage(WebDriver driver){
        super(driver);
    }

    WebDriverWait wait = new WebDriverWait(this.driver, 20);

    public void wait_for_element(WebElement elementAttr){

        wait.until(ExpectedConditions.visibilityOf(elementAttr));
    }

    public void click_element(WebElement elementAttr){
        wait_for_element(elementAttr);
        elementAttr.click();
    }

    public String read_text(WebElement elementAttr){
        wait_for_element(elementAttr);
        return elementAttr.getText();
    }

    public void enter_text(WebElement elementAttr, String value){
        wait_for_element(elementAttr);
        elementAttr.clear();
        elementAttr.sendKeys(value);
    }

    public void clear_text_entry(WebElement elementAttr){
        wait_for_element(elementAttr);
        elementAttr.clear();
    }

    public String get_value_attribute(WebElement elementAttr){
        return elementAttr.getAttribute("value");
    }

    public void select_from_dropdown(WebElement elementAttr, String option_value){
        Select drop_down = new Select(elementAttr);
        drop_down.selectByVisibleText(option_value);
//        drop_down.selectByValue(option_value);
    }
}
