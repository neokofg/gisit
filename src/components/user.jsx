import { useAppSelector } from "@/hooks";
import { gql, useQuery } from "@apollo/client";

const GETDATA = gql`
  query User($userId: ID) {
    user(id: $userId) {
      buyedScientists {
        user {
          name
          id
        }
        telegram
        phone
        id
      }
    }
  }
`;

const User = () => {
  const token = useAppSelector((state) => state.auth.user);
  const { data } = useQuery(GETDATA, {
    variables: {
      userId: 1,
    },
    context: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
  if (data)
    return (
      <div>
        <div>
          Nickname:
          {data.user.buyedScientists[0].user.name}
          Telegram:
          {data.user.buyedScientists[0].telegram}
          Phone:
          {data.user.buyedScientists[0].phone}
        </div>
      </div>
    );
  return <></>;
};
export default User;
