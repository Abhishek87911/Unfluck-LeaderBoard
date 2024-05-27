import { Avatar, Dropdown, Navbar } from "flowbite-react";

  import { FaBell, FaCoins } from "react-icons/fa";

export function Header() {
  return (
    <Navbar fluid rounded border className="w-full mx-auto"> 
      <Navbar.Brand href="">
        <img src="/static/cropped_unfluke_full.148e5bfc.png" className="mr-10 h-16 w-36"alt="" />
        
      </Navbar.Brand>
      
      <div className="flex ">
      <div>
          <FaBell color="orange" className=" h-8 w-10 m-2"></FaBell>
        </div>
        <div>
          <FaCoins color="orange" className=" h-8 w-10 m-2">0</FaCoins>
        </div>

       

        <Dropdown
          arrowIcon={true}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">User123</span>
            <span className="block truncate text-sm font-medium">User@gmail.com</span>
          </Dropdown.Header>
          <Dropdown.Item>My Profile</Dropdown.Item>
          <Dropdown.Item>My Earning</Dropdown.Item>
          <Dropdown.Item>Funds</Dropdown.Item>
          <Dropdown.Item>Change Password</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="text-red-600">Sign out</Dropdown.Item>
        </Dropdown>
        
      </div>
     
    </Navbar>
  );
}