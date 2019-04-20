<template>
    <div>
        <div class="evo-type-text">{{data.evoType}}</div>
        <div class="icon-gear-container">
            <a :href="'#!/'+type+'/'+data.id" :is="isLink?'a':'span'">
                <img
                    class="icon-gear"
                    :src="data.icon ? '../img/item/' + data.icon + '.png' : ''"
                    :title="data.name"
                    :alt="data.name"
                >
            </a>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        isLink: Boolean,
        data: Object,
        type: String
    }
};
</script>
<style scoped>
.icon-gear {
    width: 4rem;
    height: 4rem;
}

.icon-gear-container {
    position: relative;
    text-align: center;
}

.icon-gear-container a,
.icon-gear-container a:hover {
    text-decoration: none;
}
.evo-type-text {
    white-space: nowrap;
    text-align: center;
    line-height: 1rem;
    font-size: 0.75rem;
    min-height: 1rem;
}
.evo-type-text:empty {
    min-height: 0;
}
</style>
