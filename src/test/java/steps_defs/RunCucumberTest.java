package steps_defs;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {
                "pretty",
                "html:result/cucumber"
        },
        glue={""},
        features="src/test/Resources",
        tags={"not @in-progress"}
)
public class RunCucumberTest {
    public static WebDriver driver;

    @BeforeClass
    public static void classLevelSetUp(){
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @AfterClass
    public static void classLevelTearDown(){
        driver.quit();
    }
}
