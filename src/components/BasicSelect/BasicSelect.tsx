import React from 'react'
import { Select } from 'antd'
import s from './BasicSelect.module.css'

type OptionType = { value: number; label: string }
type BasicSelectPropsType = {
  options: OptionType[]
  onChange: (value: number | undefined) => void
  title: string
}
export const BasicSelect = ({ options, onChange, title }: BasicSelectPropsType) => {
  return (
    <div className={s.container}>
      <span className={s.text}>{title}</span>
      <Select
        defaultValue={null}
        style={{ width: 220 }}
        allowClear
        options={options}
        onChange={onChange}
      />
    </div>
  )
}
