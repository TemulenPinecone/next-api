export const getServerSideProps = async () => {
  const randomUsers2 = await fetch("https://randomuser.me/api/?results=10");
  const rdmUser = await rdmUser.json();
  console.log(`HIGHLIGHT`, rdmUser);

  return {
    props: {
      rdmUser,
    },
  };
};
