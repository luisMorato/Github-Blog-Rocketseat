// import {
//     useEffect,
//     useState
// } from "react";
import { Link } from "react-router-dom";
import { HiUsers } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import {
    FaArrowUpRightFromSquare,
    FaBuilding
} from "react-icons/fa6";

// import { api } from "../../../Lib/axios";
import { userProps } from "..";

import {
    ProfileContainer,
    ProfileContent,
    ProfileFooter,
    ProfileHeader,
    ProfileWrapper
} from "../styles";

// import Avatar from '../../../assets/avatar.png';

interface profileProps {
    user: userProps
}

export const Profile = ({ user }: profileProps) => {
    return (
        <ProfileContainer>
            <img src={user.avatar_url} alt="User Avatar" />
            <ProfileWrapper>
                <div>
                    <ProfileHeader>
                        <h1>{user.name}</h1>
                        <Link to={user.html_url} target="_Blank" rel="norefferer">
                            <div>
                                <span>GITHUB</span>
                                <FaArrowUpRightFromSquare size={12} />
                            </div>
                        </Link>
                    </ProfileHeader>
                    <ProfileContent>
                        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                    </ProfileContent>
                </div>
                <ProfileFooter>
                    <div>
                        <FaGithub size={18} />
                        <span>{user.login}</span>
                    </div>
                    <div>
                        <FaBuilding size={18} />
                        <span>Rocketseat</span>
                    </div>
                    <div>
                        <HiUsers size={18} />
                        <span>{user.followers} seguidores</span>
                    </div>
                </ProfileFooter>
            </ProfileWrapper>
        </ProfileContainer>
    )
}