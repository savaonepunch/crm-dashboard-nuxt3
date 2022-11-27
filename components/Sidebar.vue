<template>
    <div :class="{ container: true, isExpanded }">
        <div v-if="!darkMode" @click="isExpanded = !isExpanded" id="logo-container">
            <img v-if="!isExpanded" id="logo" src="~/assets/logo_icon.png" alt="Logo" />
            <img v-else id="logo" src="~/assets/full_logo.png" alt="Logo" />
            <Icon v-if="!isExpanded" id="right-arrow-icon" name="ph:caret-right" />
            <Icon v-else id="left-arrow-icon" name="ph:caret-left" />
        </div>
        <div v-else @click="isExpanded = !isExpanded" id="logo-container">
            <img v-if="!isExpanded" id="logo" src="~/assets/logo_icon_white.png" alt="Logo" />
            <img v-else id="logo" src="~/assets/full_logo_white.png" alt="Logo" />
            <Icon v-if="!isExpanded" id="right-arrow-icon" name="ph:caret-right" />
            <Icon v-else id="left-arrow-icon" name="ph:caret-left" />
        </div>
        <NuxtLink>
            <div class="icon-container">
                <Icon class="iconn" name="ph:key" />
                <span>Dashboard</span>
                <Icon class="link-arrow" name="ph:caret-right" />

            </div>
        </NuxtLink>
        <NuxtLink>
            <div class="icon-container">
                <Icon class="iconn" name="ph:cube-light" />
                <span>Product</span>
                <Icon class="link-arrow" name="ph:caret-right" />

            </div>
        </NuxtLink>
        <NuxtLink to="/">
            <div class="icon-container">
                <Icon class="iconn" name="ph:user" />
                <span>Customers</span>
                <Icon class="link-arrow" name="ph:caret-right" />
            </div>
        </NuxtLink>
        <NuxtLink>
            <div class="icon-container">
                <Icon class="iconn" name="ph:wallet" />
                <span>Income </span>
                <Icon class="link-arrow" name="ph:caret-right" />
            </div>
        </NuxtLink>
        <NuxtLink>
            <div class="icon-container">
                <Icon class="iconn" name="ph:percent" />
                <span>Promote</span>
                <Icon class="link-arrow" name="ph:caret-right" />
            </div>
        </NuxtLink>
        <NuxtLink>
            <div class="icon-container">
                <Icon class="iconn" name="ph:cloud" />
                <span>Cloud</span>
                <Icon class="link-arrow" name="ph:caret-right" />
            </div>
        </NuxtLink>
        <div :style="{opacity: isExpanded ? 1 : 0}" class="upgrade-container">
            <span>Upgrade to  PRO to get access all Features!</span>
            <button>Get Pro Now!</button>
        </div>
        <div id="user-container">
            <div @click="changeTheme" id="user-pfp">
                <img src="~/assets/peter.png" alt="peter" />
            </div>
            <div id="user-info">
                <span id="user-name">Peter</span>
                <span id="user-role">Project Manager</span>
            </div>
        </div>

    </div>
</template>

<script setup>
const isExpanded = ref(false);
const darkMode = ref(false);

const changeTheme = () => {
    // themeStore.darkMode = !themeStore.darkMode;
    darkMode.value = !darkMode.value;
    document.documentElement.classList.toggle("dark-theme", darkMode.value);
};
</script>

<style lang="scss" scoped>
div.container {
    overflow: hidden;
    transition: width 0.2s ease-in-out;

    a {
        all: unset;
        transition: background-color 0.2s ease-in-out;
        border-radius: 8px;

        &:hover {
            cursor: pointer;
            background-color: rgba(206, 206, 206, 0.185);
        }

        margin-bottom: 1.5rem;

        &.router-link-exact-active {
            background-color: rgb(95, 36, 255);
            border-radius: 8px;

            & div.icon-container {
                color: #fff !important;

                & .icon {
                    border-color: #fff !important;
                }

            }
        }
    }

    background-color: var(--background-color-secondary);
    min-height: 100vh;
    width: calc(50px + 4rem);
    box-shadow: var(--shadow) 0px 7px 29px -20px;
    box-sizing: border-box;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    & div#logo-container {
        position: relative;
        width: 100%;
        height: 50px;
        margin-bottom: 3rem;
        padding: 10px;
        padding-top: 0;

        & #right-arrow-icon {
            padding: 10px;
            position: absolute;
            opacity: 100%;
            opacity: 0%;
            right: 10px;
            transition: 0.2s ease-in-out;
        }

        & #left-arrow-icon {
            padding: 10px;
            position: absolute;
            opacity: 100%;
            opacity: 0%;
            right: -10px;
            transition: 0.2s ease-in-out;
        }

        &:hover {
            cursor: pointer;

            & #right-arrow-icon {
                opacity: 100%;
                right: -7px;
            }

            & #left-arrow-icon {
                opacity: 100%;
                right: 0px;
            }
        }
    }

    & div.icon-container {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        padding: 9px 13px;
        font-size: 1.2rem;
        color: var(--text-secondary-color);

        & .iconn {
            border: 1px solid var(--text-secondary-color);
            border-radius: 10px;
            padding: 2px;
        }


        & span {
            position: absolute;
            font-size: .75em;
            top: 15px;
            left: 40px;
            opacity: 0%;
            transition: .2s ease-in-out;


        }

        .link-arrow {
            position: absolute;
            right: 10px;
            top: 15px;
            opacity: 0%;
            transition: opacity .2s ease-in-out;
        }
    }

    & div.upgrade-container {
        background: linear-gradient(to right, #EAABF0, #4623E9);
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 150px;
        padding: 0rem 2rem;
        gap: 1.1rem;
        border-radius: 10px;
        margin-top: auto;
        box-shadow: var(--shadow) 0px 7px 29px 0px;
        transition: opacity .2s ease-in-out;
        overflow: hidden;

        & span {
            color: #fff;
            font-size: .9rem;
            width: 200px;
        }

        & button {
            all: unset;
            font-weight: 600;
            font-size: .9rem;
            background-color: white;
            border-radius: 100px;
            width: 160px;
            padding: .5rem 0;
            color: #4623E9;
            box-shadow: var(--shadow) 0px 7px 20px -10px;
            transition: .2s ease-in-out;

            &:hover {
                cursor: pointer;
                box-shadow: none;
            }
        }
    }

    & div#user-container {
        position: relative;
        margin-top: 4rem;
        display: flex;

        & div#user-pfp {
            background-color: red;
            width: 50px;
            height: 50px;
            border-radius: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;

            & img {
                width: 100%;
            }
        }

        & div#user-info {
            transition: opacity .2s ease-in-out, left .2s ease-in-out;
            opacity: 0;
            white-space: nowrap;
            position: absolute;
            display: flex;
            flex-direction: column;
            line-height: 20px;
            left: 50px;
            top: 7px;

            & span#user-name {
                font-weight: 700;
            }
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }

    &.isExpanded {
        width: var(--sidebar-width);

        & div.icon-container {
            & span {
                opacity: 100%;
                left: 50px;
            }

            & .link-arrow {
                position: absolute;
                right: 10px;
                top: 15px;
                opacity: 100%;
            }
        }

        & div#user-container {

            & div#user-info {
                left: 65px;
                opacity: 100%;
            }
        }
    }

    @media (max-width: 1175px) {
        
    }
}
</style>
