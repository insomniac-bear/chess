import styles from './ui.module.css';
import type { FC } from 'react';
import type { InferType } from 'yup'

import { Button } from '../../ui-kit/button/button';
import { Typography } from '../../ui-kit/typography/typography';
import { AddIcon, BarChartIcon, BlockIcon, CancelIcon, CloseIcon, ControlArrowIcon, DoneIcon, DrawIcon, ErrorIcon, FlagIcon, GameIcon, GroupIcon, GuideIcon, LogoutIcon, MailIcon, PersonIcon, PersonSearchIcon, ProcessIcon, RepeatIcon, ReplyIcon, SearchIcon, SelectIcon, SettingsIcon, SkipArrowIcon, VisibilityIcon, VisibilityOffIcon } from '../../ui-kit/icons';
import { Counter } from '../../ui-kit/counter/counter';
import { Input } from '../../ui-kit/input/input';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


const schema = object({
  login: string().trim().required('Поле обязательно').max(10, 'ДлиннООО')
})
type TForm = InferType<typeof schema>

export const UIPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: {  errors },
  } = useForm<TForm>({ mode: 'onTouched', resolver: yupResolver(schema) });


  const formSubmitHandler = (data: TForm) => {
    console.log(data);

  };
  return (
    <>
      <div className={styles.container}>
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

      <div className={styles.container}>
        <Button btnType='primary' as='link' to='/'>
          Link like as Primary button
        </Button>
        <Button btnType='secondary' as='link' to='/'>
          Link like as Secondary button
        </Button>
        <Button btnType='text' as='link' to='/'>
          Link like as Text button
        </Button>
        <Button btnType='icon' icon='LogoutIcon' as='link' to='/' />
      </div>

      <div className={styles.container}>
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

      <div className={styles.container}>
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
        <ReplyIcon />
        <SearchIcon />
        <SelectIcon />
        <SettingsIcon />
        <SkipArrowIcon />
        <VisibilityIcon />
        <VisibilityOffIcon />
      </div>

      <form onSubmit={handleSubmit(formSubmitHandler)} style={{padding: '20px'}}>
        <Input
          name='login'
          isConfidential
          placeholder='Логин'
          error={errors}
          register={register}
        />
          </form>
      <div className={styles.container}>
        <Counter />
        <Counter count={3} />
        <Counter count={33} />
      </div>
    </>
  );
};
