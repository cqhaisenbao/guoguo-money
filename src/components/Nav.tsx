import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./icon";

const NavWrapper = styled.nav`
background: #fff;line-height: 24px;box-shadow: 0 0 3px rgba(0,0,0,0.25);
>ul{display: flex;
  >li{width: 33.33333%;text-align: center;
  >a{
      display: flex;
      flex-direction: column;
      padding: 4px 0;
      justify-content: center;
      align-items: center;
       .icon{
      width: 24px;
      height: 24px;
      }
      &.selected{
      color:#e93b3d;
      .icon{
      fill:#e93b3d;
      }
      }
  }
  }
}
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    {/*图标选中高亮*/}
                    <NavLink to="/tags" exact activeClassName="selected">
                        <Icon name="tag"/>
                        标签页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                        <Icon name="money"/>
                        记账页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="chart"/>
                        统计页
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav