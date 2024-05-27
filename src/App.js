import { Header } from "./components/Header";
import { IoLogoWindows } from 'react-icons/io';
import { Dropdown,Table } from "flowbite-react";
import { useState } from "react";
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

function App() {
  const handleLeaderBoardClick = () => {
  
  };
  const [selectedSlippage, setSelectedSlippage] = useState("Slipage");

  const handleSlippageChange = (slippage) => {
    setSelectedSlippage(slippage);
  };
  return (
    <div className="w-full h-full border-teal-400 border-4">
      
        <Header />
        <div className="flex flex-row justify-center">
          <button className="mx-2 mt-2 font-bold" onClick={handleLeaderBoardClick}>
            <IoLogoWindows className="mt-1" > LeaderBoard</IoLogoWindows>
          </button>
          <button className="mx-4 mt-2 font-bold" onClick={handleLeaderBoardClick}>
            LeaderBoard
          </button>
          <button className="mx-4 mt-2 font-bold" onClick={handleLeaderBoardClick}>
          Historical Training
          </button>
          <button className="mx-4 mt-2 font-bold" onClick={handleLeaderBoardClick}>
           Historical chart
          </button>
          <button className="mx-4 mt-2 font-bold" onClick={handleLeaderBoardClick}>
            Scanners 
          </button>
          <button className="mx-4 mt-2 font-bold" onClick={handleLeaderBoardClick}>
            Alert
          </button>
          <button className="mx-4 mt-2 font-bold" onClick={handleLeaderBoardClick}>
            Basic Backtest
          </button>
          <button className="mx-4 mt-2 font-bold" onClick={handleLeaderBoardClick}>
            Advance Backtest
          </button>
          <button className="mx-4 mt-2 font-bold" onClick={handleLeaderBoardClick}>
            Pricing
          </button>
        </div>
        <div className="text-center mt-10">
        <span className="text-6xl text-red-500 bg-pink-100 hover:border-pink-500 border-2 border-transparent rounded-lg p-2 hover:text-pink-500 transition duration-300">Leader Board</span>
      </div>
      <div className="m-20 hover:border-teal-500 border-2 rounded">

      <div className="flex flex-row justify-between  ">
        <h1 className="text-3xl font-bold m-2">Basic Backset</h1>
        <div className="m-2">
        <Dropdown label={selectedSlippage} dismissOnClick={true} className="m-2">
              <Dropdown.Item onClick={() => handleSlippageChange("Slipage")}>Slipage</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSlippageChange("0%")}>0%</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSlippageChange("0.5%")}>0.5%</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSlippageChange("1%")}>1%</Dropdown.Item>
            </Dropdown>
     </div>


      </div>

      <div className="overflow-x-auto">
      <Table hoverable className="w-full" >
        <Table.Head>
          <Table.HeadCell>Rank</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Calmer Ratio</Table.HeadCell>
          <Table.HeadCell>Avg Daily Profit</Table.HeadCell>
          <Table.HeadCell>Win%(Day)</Table.HeadCell>
          <Table.HeadCell>Price(Rs.)</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
          

        
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-teal-100">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {1}
            </Table.Cell>
            <Table.Cell >Selling with re entr</Table.Cell>
            <Table.Cell className="flex flex-row"><FaArrowUp className="text-green-500 m-1" />3.97</Table.Cell>
            <Table.Cell>2999</Table.Cell>
            <Table.Cell>0.65</Table.Cell>
            <Table.Cell>500</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                View
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-teal-100">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {2}
            </Table.Cell>
            <Table.Cell>Selling with re entr</Table.Cell>
            <Table.Cell className="flex flex-row"><FaArrowDown className="text-red-500 m-1" />3.97</Table.Cell>
            <Table.Cell>2999</Table.Cell>
            <Table.Cell>0.65</Table.Cell>
            <Table.Cell>500</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Buy
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-teal-100">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {3}
            </Table.Cell>
            <Table.Cell>Selling with re entr</Table.Cell>
            <Table.Cell className="flex flex-row"><FaArrowUp className="text-green-500 m-1" />3.97</Table.Cell>
            <Table.Cell>2999</Table.Cell>
            <Table.Cell>0.65</Table.Cell>
            <Table.Cell>500</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                View
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-teal-100">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {4}
            </Table.Cell>
            <Table.Cell>Selling with re entr</Table.Cell>
            <Table.Cell className="flex flex-row"><FaArrowDown className="text-red-500 m-1" />3.97</Table.Cell>
            <Table.Cell>2999</Table.Cell>
            <Table.Cell>0.65</Table.Cell>
            <Table.Cell>500</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Buy
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-teal-100">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {5}
            </Table.Cell>
            <Table.Cell>Selling with re entr</Table.Cell>
            <Table.Cell className="flex flex-row"><FaArrowUp className="text-green-500 m-1" />3.97</Table.Cell>
            <Table.Cell>2999</Table.Cell>
            <Table.Cell>0.65</Table.Cell>
            <Table.Cell>500</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                View
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-teal-100">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {6}
            </Table.Cell>
            <Table.Cell>Selling with re entr</Table.Cell>
            <Table.Cell className="flex flex-row"><FaArrowUp className="text-green-500 m-1" />3.97</Table.Cell>
            <Table.Cell>2999</Table.Cell>
            <Table.Cell>0.65</Table.Cell>
            <Table.Cell>500</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                View
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-teal-100">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {7}
            </Table.Cell>
            <Table.Cell>Selling with re entr</Table.Cell>
            <Table.Cell className="flex flex-row"><FaArrowUp className="text-green-500 m-1" />3.97</Table.Cell>
            <Table.Cell>2999</Table.Cell>
            <Table.Cell>0.65</Table.Cell>
            <Table.Cell>500</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                View
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
      </div>
        
        

       
    </div>

  );
}

export default App;
