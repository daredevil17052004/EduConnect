"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { Switch } from './ui/switch'
import { Label } from './ui/label'

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
  
    return (
        // <button
        //   onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        //   className="p-2 border rounded"
        // >
        //   Toggle to {theme === "light" ? "Dark" : "Light"} Mode
        // </button>
        <div className='flex items-center justify-between  w-24'>
            <Switch onClick={() => setTheme(theme === "light" ? "dark" : "light")} />
            <Label>{theme === "light" ? "Dark" : "Light"}</Label>
        </div>
      )

    }

export default ThemeSwitcher;