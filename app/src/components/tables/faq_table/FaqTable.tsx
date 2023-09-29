import { Table } from "react-bootstrap";

const FaqTable = () => {
    // General Questions
    const email = 'duckart@hawaii.edu';
    // Resources
    const githubRepo = 'https://github.com/uhawaii-system-its-ti-iam/casified-uh-holiday-webapp';
    const holidaysDesignated = 'https://www.capitol.hawaii.gov/hrscurrent/Vol01_Ch0001-0042F/HRS0008/HRS_0008-0001.htm';
    const observanceHolidays = 'https://www.capitol.hawaii.gov/hrscurrent/Vol01_Ch0001-0042F/HRS0008/HRS_0008-0002.htm';
    const stateObservedHolidays = 'http://dhrd.hawaii.gov/state-observed-holidays/';
    // Technologies
    const springFrameworkGuide = 'https://docs.spring.io/spring-framework/docs/5.3.14/reference/html/';
    const springFrameworkAPI = 'https://docs.spring.io/spring-framework/docs/5.3.14/javadoc-api/';
    const springBootGuide = 'https://docs.spring.io/spring-boot/docs/2.6.2/reference/htmlsingle/';

    return ( 
        <Table bordered aria-label="FAQ Table">
            <tbody>
                <tr>
                    <td colSpan={2}><b>General Questions</b></td>
                </tr>
                <tr>
                    <td>Q: Who can answer some basic questions about the application?</td>
                    <td>A: Send an email to <a href={`mailto:${email}`}>ITS Web Developers.</a></td>
                </tr>
                <tr>
                    <td colSpan={2}><b>Resources</b></td>
                </tr>
                <tr>
                    <td>Q: Can I get the source code for this project?</td>
                    <td>
                        A: Sure thing. It is available at this 
                        <a href={githubRepo} target="_github_repo"> github repository.</a>
                    </td>
                </tr>
                <tr>
                    <td>Q: Can I contribute coding modifications to this project?</td>
                    <td>A: Yes! See the github repository mentioned above.</td>
                </tr>
                <tr>
                    <td>Q: How are the dates determined?</td>
                    <td>
                        A: By state statute. <br/>
                        You take this state document: 
                        <a href={holidaysDesignated} target="_holidays_designated"> Holidays designated</a>, <br/>
                        then combine it with this other state document: 
                        <a href={observanceHolidays} target="_observance_holidays"> Observance of holidays</a>.
                    </td>
                </tr>
                <tr>
                    <td>Q: Does the state produce a holiday list?</td>
                    <td>
                        A: Yes, it does. See 
                        <a href={stateObservedHolidays} target="_state_observed_holidays"> State Observed Holidays</a>.
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}><b>Technologies</b></td>
                </tr>
                <tr>
                    <td>Q: What did you use to create the site?</td>
                    <td>
                        Apache Maven <br/>
                        Apache Tomcat <br/>
                        Java 8 <br/>
                        Spring Framework
                        <a href={springFrameworkGuide} target="_spring_framework_guide"> (Guide)</a>
                        <a href={springFrameworkAPI} target="_spring_framework_api"> (API)</a> <br/>
                        Spring Boot 
                        <a href={springBootGuide} target="_spring_boot_guide"> (Guide)</a> <br/>
                        Bootstrap <br/>
                        React.js <br/>
                        Next.js
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}
 
export default FaqTable;
