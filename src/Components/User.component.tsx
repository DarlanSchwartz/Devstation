import { UserData } from "@/Services/User";
import styled from "styled-components";

export default function ViewUser({ address, birthday, email, firstname, gender, id, lastname, phone, website }: UserData) {
    return (
        <SCUser key={id}>
            <div className="user-info">
                <h2>{firstname} {lastname}</h2>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{birthday}</p>
                <span className={gender}>{gender}</span>
            </div>
            <div className="user-address">
                <h3>Address</h3>
                <p>{address.street}</p>
                <p>{address.city}</p>
                <p>{address.country}</p>
            </div>
            <div className="user-website">
                <h3>Website</h3>
                <a href={website} target="_blank">{website}</a>
            </div>
        </SCUser>
    );
}

const SCUser = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.gray};
    border-radius: 20px;
    flex-shrink: 0;
    width: 500px;
    height: 200px;
    h2, h3{
        font-weight: 800;
        white-space: nowrap;
    }
    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
    }
    .user-info{
        display: flex;
        flex-direction: column;
        gap: 20px;
        h2{
            font-size: 24px;
            color: ${({ theme }) => theme.white};
        }
        p{
            font-size: 16px;
            color: ${({ theme }) => theme.white};
        }
        span{
            font-size: 16px;
            color: ${({ theme }) => theme.white};
        }
    }
    .user-address{
        display: flex;
        flex-direction: column;
        gap: 20px;
        h3{
            font-size: 20px;
            color: ${({ theme }) => theme.white};
        }
        p{
            font-size: 16px;
            color: ${({ theme }) => theme.white};
        }
    }
    .user-website{
        display: flex;
        flex-direction: column;
        gap: 20px;
        h3{
            font-size: 20px;
            color: ${({ theme }) => theme.white};
        }
        a{
            font-size: 16px;
            color: ${({ theme }) => theme.white};
        }
    }
`;