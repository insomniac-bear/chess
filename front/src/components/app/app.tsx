import styles from './app.module.css';
import type { FC } from 'react';

import { Button } from '../../ui-kit/button/button';
import { Typography } from '../../ui-kit/typography/typography';
import { AddIcon, BarChartIcon, BlockIcon, CancelIcon, CloseIcon, ControlArrowIcon, DoneIcon, DrawIcon, ErrorIcon, FlagIcon, GameIcon, GroupIcon, GuideIcon, LogoutIcon, MailIcon, PersonIcon, ProcessIcon, RepeatIcon, ReplayIcon, SearchIcon, SettingsIcon, SkipArrowIcon, VisibilityIcon, VisibilityOffIcon } from '../../ui-kit/icons';

export const App: FC = () => {
  return (
    <div>
      <div>
        <Button btnType='primary'>
          Primary button
        </Button>
        <Button btnType='secondary'>
          Secondary button
        </Button>
        <Button btnType='text'>
          Text button
        </Button>
        <Button btnType='icon' icon='LogoutIcon' />
      </div>

      <div>
        <Typography as='h1' TypographyType='h1' className={styles.color}>H1 Title</Typography>
        <Typography as='h2' TypographyType='h2' className={styles.color}>H2 Title</Typography>
        <Typography as='p' TypographyType='text-l' className={styles.color}>Text large</Typography>
        <Typography as='p' TypographyType='text-m' className={styles.color}>Text medium</Typography>
        <Typography as='p' TypographyType='text-s' className={styles.color}>Text small</Typography>
        <Typography as='p' TypographyType='text-s-bold' className={styles.color}>Text small bold</Typography>
        <Typography as='p' TypographyType='label' className={styles.color}>Label</Typography>
        <Typography as='p' TypographyType='label-s' className={styles.color}>Label small</Typography>
        <Typography as='p' TypographyType='label-s-bold' className={styles.color}>Label small bold</Typography>
      </div>

      <div>
        <AddIcon />
        <BarChartIcon />
        <BlockIcon />
        <CancelIcon />
        <CloseIcon />
        <ControlArrowIcon />
        <DoneIcon />
        <DrawIcon />
        <ErrorIcon />
        <FlagIcon />
        <GameIcon />
        <GroupIcon />
        <GuideIcon />
        <LogoutIcon />
        <MailIcon />
        <PersonIcon />
        <ProcessIcon />
        <RepeatIcon />
        <ReplayIcon />
        <SearchIcon />
        <SettingsIcon />
        <SkipArrowIcon />
        <VisibilityIcon />
        <VisibilityOffIcon />
      </div>
    </div>
  );
};
