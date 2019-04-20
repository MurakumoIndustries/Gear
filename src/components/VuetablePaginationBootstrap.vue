<template>
    <ul class="pagination">
        <li :class="['page-item',{'disabled':isOnFirstPage}]">
            <a class="page-link" href @click.prevent="loadPage(1)">
                <i class="material-icons" style="height:1rem;line-height:1.25rem;">first_page</i>
            </a>
        </li>
        <li :class="['page-item',{'disabled':isOnFirstPage}]">
            <a class="page-link" href @click.prevent="loadPage('prev')">
                <i class="material-icons" style="height:1rem;line-height:1.25rem;">chevron_left</i>
            </a>
        </li>

        <template v-if="notEnoughPages">
            <li :key="n" v-for="n in totalPage" :class="['page-item',{'active': isCurrentPage(n)}]">
                <a class="page-link" href @click.prevent="loadPage(n)" v-html="n"></a>
            </li>
        </template>
        <template v-else>
            <li v-show="windowStart>1" :class="['page-item','disabled']">
                <a class="page-link" href>
                    <i class="material-icons" style="height:1rem;line-height:1.25rem;">more_horiz</i>
                </a>
            </li>
            <li
                :key="n"
                v-for="n in windowSize"
                :class="['page-item',{'active':  isCurrentPage(windowStart+n-1)}]"
            >
                <a
                    class="page-link"
                    href
                    @click.prevent="loadPage(windowStart+n-1)"
                    v-html="windowStart+n-1"
                ></a>
            </li>
            <li v-show="windowStart+windowSize-1<totalPage" :class="['page-item','disabled']">
                <a class="page-link" href>
                    <i class="material-icons" style="height:1rem;line-height:1.25rem;">more_horiz</i>
                </a>
            </li>
        </template>

        <li :class="['page-item',{'disabled':isOnLastPage}]">
            <a class="page-link" href @click.prevent="loadPage('next')">
                <i class="material-icons" style="height:1rem;line-height:1.25rem;">chevron_right</i>
            </a>
        </li>
        <li :class="['page-item',{'disabled':isOnLastPage}]">
            <a class="page-link" href @click.prevent="loadPage(totalPage)">
                <i class="material-icons" style="height:1rem;line-height:1.25rem;">last_page</i>
            </a>
        </li>
    </ul>
</template>
<script>
import { VuetablePaginationMixin } from "vuetable-2";
export default {
    mixins: [VuetablePaginationMixin]
};
</script>

