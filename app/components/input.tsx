import { TextField } from '@mui/material';
import * as React from 'react';
import { CSSProperties } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';

type inputProps = {
    name: string,
    placeholder: string,
    variant: 'filled' | 'outlined'
    type?: string;
    sx?: CSSProperties;
    value?: string;
    startIcon?: boolean;
    isLoading?: boolean;
    onClick?: () => void;
    onChange: (value: string) => void;
}

export function InputComponent (props: inputProps){
    const {
        name,
        placeholder,
        type = 'search',
        sx = { marginBottom: '10px' },
        variant,
        value,
        startIcon,
        isLoading,
        onClick,
        onChange,
    } = props;

    return (
        <TextField
            className={name}
            placeholder={placeholder}
            sx={sx}
            value={value}
            variant={variant}
            type={type}
            onClick={onClick}
            onChange={(e) => onChange(e.target.value)}
            slotProps={{
                input:{
                    startAdornment: (
                        <InputAdornment position="start">
                            {isLoading ? (
                                <CircularProgress/>
                            ) : (
                                startIcon && (
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                )
                            )}
                        </InputAdornment>
                    )
                }
            }}
            ></TextField>
    )
}