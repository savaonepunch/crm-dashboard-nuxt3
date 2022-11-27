<template>
    <main>
        <div class="heading">
            <p id="title">Hello Peter 👋🏼</p>
            <div class="universal-search-container">
                <Icon name="ph:magnifying-glass" />
                <input placeholder="Search" type="text" name="global" id="universal-search">
            </div>
        </div>
        <div class="analytics-container">
            <div class="section">
                <div class="icon-container">
                    <Icon name="ph:users" />
                </div>
                <div class="info-container">
                    <span class="title">Total Customers</span>
                    <span class="info-value">5,523</span>
                    <span class="details">
                        <span class="value good">
                            <Icon name="ph:arrow-up" />18%
                        </span>
                        this month
                    </span>
                </div>
            </div>
            <div class="section">
                <div class="icon-container">
                    <Icon name="ph:user-plus" />
                </div>
                <div class="info-container">
                    <span class="title">Members</span>
                    <span class="info-value">1,893</span>
                    <span class="details">
                        <span class="value bad">
                            <Icon name="ph:arrow-down" />1%
                        </span>
                        this month
                    </span>
                </div>
            </div>
            <div class="section">
                <div class="icon-container">
                    <Icon name="ph:desktop" />
                </div>
                <div class="info-container">
                    <span class="title">Active Now</span>
                    <span class="info-value">189</span>
                    <span class="details">
                        <div class="images-container">
                            <img src="~/assets/brian.png" alt="brian">
                            <img src="~/assets/chris.png" alt="brian">
                            <img src="~/assets/stewie.png" alt="brian">
                            <img src="~/assets/meg.png" alt="brian">
                            <img src="~/assets/louis.png" alt="brian">
                        </div>
                    </span>
                </div>
            </div>
        </div>
        <div class="customers-container">
            <div class="customers-heading">
                <span class="title">All Customers</span>
                <div class="customer-search-container">
                    <Icon name="ph:magnifying-glass" />
                    <input placeholder="Search" type="text" name="global" id="customer-search">
                </div>
                <div class="sort-container">
                    Sort by:&nbsp<span>Newest</span>
                    <Icon name="ph:caret-down-bold" />
                </div>
            </div>
            <div class="customers-table">
                <div class="row">
                    <div class="column">
                        <span>Customer Name</span>
                    </div>
                    <div class="column">
                        <span>Company</span>
                    </div>
                    <div class="column">
                        <span>Phone Number</span>
                    </div>
                    <div class="column">
                        <span>Email</span>
                    </div>
                    <div class="column">
                        <span>Country</span>
                    </div>
                    <div class="column">
                        <span>Status</span>
                    </div>
                </div>
                <div class="row active">
                    <div class="column">
                        <span>Customer Name</span>
                    </div>
                    <div class="column">
                        <span>Company</span>
                    </div>
                    <div class="column">
                        <span>Phone Number</span>
                    </div>
                    <div class="column">
                        <span>Email</span>
                    </div>
                    <div class="column">
                        <span>Country</span>
                    </div>
                    <div class="column">
                        <div class="status">Active</div>
                    </div>
                </div>
                <div class="row inactive">
                    <div class="column">
                        <span>Customer Name</span>
                    </div>
                    <div class="column">
                        <span>Company</span>
                    </div>
                    <div class="column">
                        <span>Phone Number</span>
                    </div>
                    <div class="column">
                        <span>Email</span>
                    </div>
                    <div class="column">
                        <span>Country</span>
                    </div>
                    <div class="column">
                        <div class="status">Inactive</div>
                    </div>
                </div>
                <div class="row inactive">
                    <div class="column">
                        <span>Customer Name</span>
                    </div>
                    <div class="column">
                        <span>Company</span>
                    </div>
                    <div class="column">
                        <span>Phone Number</span>
                    </div>
                    <div class="column">
                        <span>Email</span>
                    </div>
                    <div class="column">
                        <span>Country</span>
                    </div>
                    <div class="column">
                        <div class="status">Inactive</div>
                    </div>
                </div>
                <div class="row active">
                    <div class="column">
                        <span>Customer Name</span>
                    </div>
                    <div class="column">
                        <span>Company</span>
                    </div>
                    <div class="column">
                        <span>Phone Number</span>
                    </div>
                    <div class="column">
                        <span>Email</span>
                    </div>
                    <div class="column">
                        <span>Country</span>
                    </div>
                    <div class="column">
                        <div class="status">Active</div>
                    </div>
                </div>
                <div class="row active">
                    <div class="column">
                        <span>Customer Name</span>
                    </div>
                    <div class="column">
                        <span>Company</span>
                    </div>
                    <div class="column">
                        <span>Phone Number</span>
                    </div>
                    <div class="column">
                        <span>Email</span>
                    </div>
                    <div class="column">
                        <span>Country</span>
                    </div>
                    <div class="column">
                        <div class="status">Active</div>
                    </div>
                </div>
                <div class="row active">
                    <div class="column">
                        <span>Customer Name</span>
                    </div>
                    <div class="column">
                        <span>Company</span>
                    </div>
                    <div class="column">
                        <span>Phone Number</span>
                    </div>
                    <div class="column">
                        <span>Email</span>
                    </div>
                    <div class="column">
                        <span>Country</span>
                    </div>
                    <div class="column">
                        <div class="status">Active</div>
                    </div>
                </div>
                <div class="row active">
                    <div class="column">
                        <span>Customer Name</span>
                    </div>
                    <div class="column">
                        <span>Company</span>
                    </div>
                    <div class="column">
                        <span>Phone Number</span>
                    </div>
                    <div class="column">
                        <span>Email</span>
                    </div>
                    <div class="column">
                        <span>Country</span>
                    </div>
                    <div class="column">
                        <div class="status">Active</div>
                    </div>
                </div>
                <div class="row inactive">
                    <div class="column">
                        <span>Customer Name</span>
                    </div>
                    <div class="column">
                        <span>Company</span>
                    </div>
                    <div class="column">
                        <span>Phone Number</span>
                    </div>
                    <div class="column">
                        <span>Email</span>
                    </div>
                    <div class="column">
                        <span>Country</span>
                    </div>
                    <div class="column">
                        <div class="status">Inactive</div>
                    </div>
                </div>
            </div>

            <div class="entries-and-pagination">
                <div class="entries">
                    Showing data 1 to 8 of 256k entries.
                </div>
                <div class="pagination">
                    <div>&lt;</div>
                    <div class="active">1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div class="dots">...</div>
                    <div>40</div>
                    <div>></div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
main {
    max-width: 1520px;
    margin-left: auto;
    margin-right: auto;

    & div.heading {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5rem;

        & div.universal-search-container {
            min-width: 200px;
            border-radius: 8px;
            background-color: var(--background-color-secondary);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 8px;
            box-shadow: var(--shadow) 0px 7px 29px -20px;

            &:focus-within {
                outline: 1px solid var(--accent-color);
            }

            & input {
                border: none;
                outline: none;
                height: 100%;
                background-color: rgba(240, 248, 255, 0);
                color: var(--text-secondary-color);
                padding-left: 8px;

                &::placeholder {
                    color: var(--text-secondary-color);
                }
            }

            & .icon {
                font-size: 1.5rem;
                color: var(--text-secondary-color);
            }
        }

        & p#title {
            margin: 0;
            padding: 0;
            font-weight: 500;
            font-size: 1.6em;
        }

    }

    & div.analytics-container {
        display: flex;
        background-color: var(--background-color-secondary);
        border-radius: 20px;
        padding: 30px;
        justify-content: space-between;
        box-shadow: var(--shadow) 0px 7px 29px -20px;

        & div.section {
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1rem;

            &:nth-of-type(2) {
                border-left: 1px solid var(--accent-color);
                border-right: 1px solid var(--accent-color);
            }

            & div.info-container {
                display: flex;
                flex-direction: column;

                & span.title {
                    color: var(--text-secondary-color);
                }

                & span.info-value {
                    color: var(--text-primary-color);
                    font-size: 1.6rem;
                    font-weight: 700;
                }

                & span.details {
                    font-size: .9rem;

                    & span.value {
                        font-weight: 700;

                        &.good {
                            color: #00AC4F;
                        }

                        &.bad {
                            color: rgb(255, 37, 84);
                        }
                    }

                    & div.images-container {
                        display: flex;

                        & img {
                            border-radius: 100px;
                            border: 3px solid var(--background-color-secondary);
                            width: 30px;
                            height: 30px;
                            margin-right: -10px;

                            &:last-of-type {
                                margin: 0;
                            }
                        }
                    }
                }
            }

            & div.icon-container {
                background-color: #00ff7727;
                min-width: 80px;
                min-height: 80px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 100px;
                margin-right: 1.5rem;

                & .icon {
                    font-size: 2.5rem;
                    color: #00AC4F;
                }
            }
        }
    }

    & div.customers-container {
        background-color: var(--background-color-secondary);
        border-radius: 20px;
        margin-top: 3rem;
        padding: 2rem;
        box-shadow: var(--shadow) 0px 7px 29px -20px;
        display: flex;
        flex-direction: column;

        & div.customers-heading {
            display: flex;
            margin-bottom: 1rem;

            & span.title {
                font-size: 1.5rem;
                font-weight: 600;
            }

            & div.customer-search-container {
                margin-left: auto;
                margin-right: 1rem;
                background-color: var(--accent-color-secondary);
                min-height: 2.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 8px;
                padding: 0 8px;

                & .icon {
                    font-size: 1.5rem;
                }

                & input {
                    background-color: #ffffff00;
                    height: 100%;
                    border: none;
                    outline: none;
                    color: var(--text-primary-color);
                    padding-left: 5px;
                }
            }

            & div.sort-container {
                background-color: var(--accent-color-secondary);
                min-height: 2.5rem;
                border-radius: 8px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 15px;
                font-size: .8rem;
                font-weight: 400;

                &:hover {
                    cursor: pointer;
                }

                & span {
                    font-weight: 600;
                    margin-right: .5rem;
                }
            }
        }

        & div.customers-table {
            display: flex;
            flex-direction: column;
            margin-bottom: 2rem;

            & div.row {
                font-size: .9rem;
                display: flex;
                padding: 1rem 0;
                align-items: center;
                border-bottom: 1px solid var(--accent-color-secondary);

                & span {
                    color: var(--text-primary-color);
                    font-weight: 500;
                }

                &.active {
                    & div.status {
                        font-weight: 500;
                        background-color: #00ff7727;
                        color: #00AC4F;
                        width: 90px;
                        padding: .1rem 0;
                        text-align: center;
                        border: 1px solid #00AC4F;
                        border-radius: 4px;
                    }
                }

                &.inactive {
                    & div.status {
                        font-weight: 500;
                        background-color: #ff000036;
                        color: rgb(255, 37, 84);

                        width: 90px;
                        padding: .1rem 0;
                        text-align: center;
                        border: 1px solid rgb(255, 37, 84);
                        border-radius: 4px;
                    }
                }

                &:first-of-type {
                    & span {
                        color: var(--text-secondary-color);
                    }
                }

                & div.column {   
                    display: flex;
                    width: calc(100% / 3);   
                    
                    &:last-of-type {
                        justify-content: end;
                    }
                }
            }
        }

        & div.entries-and-pagination {
            display: flex;
            align-items: center;
            justify-content: space-between;

            & div.entries {
                color: var(--text-secondary-color);
            }

            & div.pagination {
                display: flex;
                align-items: center;
                gap: .5rem;

                & div {
                    background-color: var(--accent-color-secondary);
                    width: 25px;
                    height: 25px;
                    font-size: .7rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 8px;
                    font-weight: 500;
                    border: 1px solid var(--accent-color);
                    color: var(--text-primary-color);

                    &.active {
                        background-color: rgb(95, 36, 255);
                        color: white;
                    }

                    &.dots {
                        background-color: initial;
                        border: none;
                    }

                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }

    // @media (max-width: 1175px) {
    //     div.heading {
    //         flex-direction: column;
    //         gap: 1rem;
    //         & div.universal-search-container {
    //             width: 200px;
    //             height: 2rem;
    //         }
    //     }

    //     & div.analytics-container {
    //         flex-direction: column;
    //     }
    // }
}
</style>