'use client';

import { NavDropdown } from 'react-bootstrap';

const CampusDropdown = () => {
    return ( 
        <NavDropdown title="Campuses" align="end">
            <NavDropdown.Item href="https://hilo.hawaii.edu/" target="_uhhi">Hilo</NavDropdown.Item>
            <NavDropdown.Item href="https://manoa.hawaii.edu/" target="_uhma">Manoa</NavDropdown.Item>
            <NavDropdown.Item href="http://westoahu.hawaii.edu/" target="_uhwo">West Oahu</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://hawaii.hawaii.edu/" target="_uhcchi">Hawaii</NavDropdown.Item>
            <NavDropdown.Item href="http://honolulu.hawaii.edu/" target="_uhccho">Honolulu</NavDropdown.Item>
            <NavDropdown.Item href="http://kapiolani.hawaii.edu/" target="_uhccka">Kapiolani</NavDropdown.Item>
            <NavDropdown.Item href="http://kauai.hawaii.edu/" target="_uhccku">Kauai</NavDropdown.Item>
            <NavDropdown.Item href="http://www.leeward.hawaii.edu/" target="_uhccle">Leeward</NavDropdown.Item>
            <NavDropdown.Item href="http://maui.hawaii.edu/" target="_uhccmu">Maui</NavDropdown.Item>
            <NavDropdown.Item href="http://windward.hawaii.edu/" target="_uhccwi">Windward</NavDropdown.Item>
        </NavDropdown>
    );
}
 
export default CampusDropdown;
