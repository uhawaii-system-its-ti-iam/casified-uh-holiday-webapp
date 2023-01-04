import { Table } from "react-bootstrap";

const ContactTable = () => {
    return (
        <Table bordered aria-label="Contact Table">
            <tbody>
                <tr>
                    <td>For General Help/How-To Questions</td>
                    <td>Send email: <a href="mailto:duckart@hawaii.edu">duckart@hawaii.edu</a></td>
                </tr>
                <tr>
                    <td>Reporting Technical Issues/Problems</td>
                    <td>Send email: <a href="mailto:duckart@hawaii.edu">duckart@hawaii.edu</a></td>
                </tr>
                <tr>
                    <td>Information Technology Services</td>
                    <td>See: <a href="http://www.hawaii.edu/its/" target="_its_office">www.hawaii.edu/its</a></td>
                </tr>
            </tbody>
        </Table>
    );
}
 
export default ContactTable;
