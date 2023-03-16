import PropTypes from 'prop-types';
import { ProfileDescription } from 'components/Task_1/ProfileDescription/ProfileDescription';
import { ProfileStats } from 'components/Task_1/ProfileStats/ProfileStats';
import { UserProfile } from './Profile.styled';

export const Profile = ({ user }) => {
  return (
    <UserProfile key={user.tag}>
      <ProfileDescription user={user} />
      <ProfileStats user={user} />
    </UserProfile>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
};
