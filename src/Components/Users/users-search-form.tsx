import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { FilterType } from '../../redux/users-reducer'
import { useSelector } from 'react-redux';
import { getUsersFilter } from '../../redux/usersSelectors';

const usersSearchFormValidate = (values: any) => {
  const errors = {}
  return errors
}

type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}

type FriendFilterType = 'true' | 'false' | 'null'

type FormType = {
  term: string
  friend: FriendFilterType
}

const UserSearchForm: React.FC<PropsType> = React.memo(({ onFilterChanged }) => {

  const filter = useSelector(getUsersFilter)

  const submit = (values: FormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    const convertedValues = {
      term: values.term,
      friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
    }

    onFilterChanged(convertedValues)
    setSubmitting(false)
  }


  return (
    <div className="user-search-form">
      <Formik
        enableReinitialize
        initialValues={{ term: filter.term, friend: String(filter.friend) as FriendFilterType }}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />
            <Field name='friend' as='select'>
              <option value="null">all</option>
              <option value="true">only followed</option>
              <option value="false">only unfollowed</option>
            </Field>
            <ErrorMessage name="term" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
           </button>
          </Form>
        )}
      </Formik>
    </div>
  )
})

export default UserSearchForm