import { useAppSelector } from "@/hooks";
import { gql, useQuery } from "@apollo/client";

const GETUSER = gql`
  query Me {
    me {
      id
    }
  }
`;

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
  const token = useAppSelector((state) => state.auth.token);
  const user = useAppSelector((state) => state.auth.user);
  const { data } = useQuery(GETDATA, {
    variables: {
      userId: user?.id,
    },
    context: {
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  });
  if (data) {
    if (data.user.buyedScientists.length > 0) {
      return (
        <div>
          <div>
            {data.user.buyedScientists.length > 0 ? (
              <div>
                Nickname:
                {data.user.buyedScientists[0].user.name}
                <br />
                Telegram:
                {data.user.buyedScientists[0].telegram}
                <br />
                Phone:
                {data.user.buyedScientists[0].phone}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      );
    }
  }

  return <h1 className="text-[96px] text-center">404</h1>;
};
export default User;
