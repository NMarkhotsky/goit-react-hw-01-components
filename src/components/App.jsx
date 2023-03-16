import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';
import { GlobalStyle } from 'GlobalStyle';
import { Profile } from './Task_1/Profile/Profile';
import { Layout } from './Layout/Layout.styled';
import { Statistics } from './Task_2/Statistics/Statistics';
import { FriendList } from './Task_3/FriendList/FriendList';
import { TransactionHistory } from './Task_4/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Layout>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Layout>
  );
};
