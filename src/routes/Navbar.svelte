<script lang='ts'>

    let navItems = [
    { 
        name: 'Home',
        address: '/'
    }, {
        name: 'Council',
        address: '/council'
    }, {
        name: 'Events',
        address: '/events'
    }, {
        name: 'Resources',
        address: '/resources'
    }]

</script>

<div class='navbar-div'>
    <nav class='navbar'>
        {#each navItems as navItem}
            <a href={navItem.address}>
                <div class='nav-item'>
                    <p class='text'>{navItem.name}</p>
                </div>
            </a>
        {/each}
    </nav>
</div>

<style>
    .navbar {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .nav-item {
        padding-left: 1rem;
        padding-right: 1rem;
        color: #ffffff;
    }

</style>