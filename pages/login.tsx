import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getProviders, signIn, ClientSafeProvider } from "next-auth/react";

const Login = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="flex flex-col items-center justify-center bg-black h-screen">
      <img
        className="w-52 mb-5"
        src="http://i.postimg.cc/gcRBGYQ3/Spotify-Logo-CMYK-Green.png"
        alt="spotify logo"
      />
      {/* The logical OR used to provide an object in case the value is falsy */}
      {Object.values((providers as ClientSafeProvider) || {}).map(
        (provider) => (
          <div key={provider.id}>
            <button
              className="bg-[#18d860] text-white p-5 rounded-full mt-4"
              onClick={() => {
                signIn(provider.id, { callbackUrl: "/" });
              }}
            >
              Login with {provider.id}
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
