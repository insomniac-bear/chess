import styles from './ui.module.css';
import type { FC } from 'react';

import { Button } from '../../ui-kit/button/button';
import { Typography } from '../../ui-kit/typography/typography';
import { AddIcon, BarChartIcon, BlockIcon, CancelIcon, CloseIcon, ControlArrowIcon, DoneIcon, DrawIcon, ErrorIcon, FlagIcon, GameIcon, GroupIcon, GuideIcon, LogoutIcon, MailIcon, PersonIcon, PersonSearchIcon, ProcessIcon, RepeatIcon, ReplayIcon, SearchIcon, SelectIcon, SettingsIcon, SkipArrowIcon, VisibilityIcon, VisibilityOffIcon } from '../../ui-kit/icons';
import { useForm } from 'react-hook-form';
import Input from '../../ui-kit/input/input';

interface ITestFormState {
  login: string;
}

export const UIPage: FC = () => {
  const {
    register,
    formState: {  errors },
  } = useForm<ITestFormState>({ mode: 'onTouched' });

  return (
    <>
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
        <Typography as='h1' typographyType='h1' className={styles.color}>H1 Title</Typography>
        <Typography as='h2' typographyType='h2' className={styles.color}>H2 Title</Typography>
        <Typography as='p' typographyType='text-l' className={styles.color}>Text large</Typography>
        <Typography as='p' typographyType='text-m' className={styles.color}>Text medium</Typography>
        <Typography as='p' typographyType='text-s' className={styles.color}>Text small</Typography>
        <Typography as='p' typographyType='text-s-bold' className={styles.color}>Text small bold</Typography>
        <Typography as='p' typographyType='label' className={styles.color}>Label</Typography>
        <Typography as='p' typographyType='label-s' className={styles.color}>Label small</Typography>
        <Typography as='p' typographyType='label-s-bold' className={styles.color}>Label small bold</Typography>
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
        <PersonSearchIcon />
        <ProcessIcon />
        <RepeatIcon />
        <ReplayIcon />
        <SearchIcon />
        <SelectIcon />
        <SettingsIcon />
        <SkipArrowIcon />
        <VisibilityIcon />
        <VisibilityOffIcon />
      </div>

      <div style={{padding: '20px'}}>
        <Input
          placeholder='Логин'
          errors={errors.login}
          {...register('login', {
            required: 'Это поле необходимо заполнить.',
            minLength: {
              value: 1,
              message: 'Минимальное количество символов: 1',
            },
            maxLength: {
              value: 10,
              message: 'Максимальное количество символов: 10',
            },
          })}/>
      </div>
    </>
  );
};
