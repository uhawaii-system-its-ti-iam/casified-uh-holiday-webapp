import { Table } from "react-bootstrap";

const ContactTable = () => {
    const email = 'duckart@hawaii.edu';
    const itsOffice = 'www.hawaii.edu/its';

    return (
        <Table bordered aria-label="Contact Table">
            <tbody>
                <tr>
                    <td>For General Help/How-To Questions</td>
                    <td>Send email: <a href={`mailto:${email}`}>{email}</a></td>
                </tr>
                <tr>
                    <td>Reporting Technical Issues/Problems</td>
                    <td>Send email: <a href={`mailto:${email}`}>{email}</a></td>
                </tr>
                <tr>
                    <td>Information Technology Services</td>
                    <td>See: <a href={`http://${itsOffice}`} target="_its_office">{itsOffice}</a></td>
                </tr>
            </tbody>
        </Table>
    );
}
 
export default ContactTable;
