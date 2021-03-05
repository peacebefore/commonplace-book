// create navigation for major items with links to smaller items

// Budget
  // might add calculator function, track current balances and due dates. Also option for things we want to save up for and notes for those

// Goals
  // includes long and short term goals, to-do list, calendar (similar to my planner). Include way to track individual goals - maybe each has its own page with the goal at the top and important dates or notes. If it's a goal that should be met every day, can include a checker that puts a fun animation and image on the calendar to indicate that the goal for that day was met. Similar for long-term goals that are broken down into smaller pieces to be more manageable.

// Journal
  // includes date and time, along with space for writing entry. Includes gratitude section for each day. 

// Ideas
  // includes Stockpile, Business Ideas, ability to create new idea-pads for different topics.

// Recipes
   //includes collections and filters for searching. can tag recipes upon creation to help with filtering. basic recipe template for adding new recipes. option to include picture, time, calories, steps. video link if have one. 

// Readings
  // place to enter titles, authors, links. Can also break down by genre or category. Include readings that I want to track in my studies. 

import React, { useState } from 'react';  
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './sidebar.data';
import SubMenu from './sub-menu.component';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
