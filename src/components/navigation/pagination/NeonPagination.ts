import NeonButton from '@/components/user-input/button/NeonButton.vue';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';
import { computed, defineComponent } from 'vue';
import { NeonFunctionalColor } from '@/model/common/color/NeonFunctionalColor';

/**
 * A pagination component that displays a list of page numbers and allows the user to navigate between pages. Typically,
 * the component displays the first and last page numbers and 3 pages before and after the current page.
 */
export default defineComponent({
  name: 'NeonPagination',
  components: {
    NeonButton,
    NeonIcon,
  },
  props: {
    /**
     * The current page number.
     */
    page: { type: Number, required: true },
    /**
     * The URL template for the pagination links. The template should contain a '{page}' placeholder that will be
     * substituted in links with the correct page number.
     */
    urlTemplate: { type: String, required: true },
    /**
     * The number of items per page.
     */
    pageSize: { type: Number, default: 20 },
    /**
     * The total number of items.
     */
    total: { type: Number, required: true },
    /**
     * Whether to display links to the first and last pages.
     */
    displayFirstAndLast: { type: Boolean, default: false },
    /**
     * The accent color of the component.
     */
    color: { type: String as () => NeonFunctionalColor, default: () => NeonFunctionalColor.Brand },
  },
  setup(props) {
    const maxDisplayPageLinks = 5;
    const pageDisplayCount = maxDisplayPageLinks - 2;

    const pageCount = computed(() => Math.ceil(props.total / props.pageSize));
    const hidePagination = computed(() => pageCount.value <= 1);

    const previousPage = computed(() => Math.max(props.page - 1, 1));
    const disabledPrevious = computed(() => props.page === 1);

    const nextPage = computed(() => Math.min(props.page + 1, pageCount.value));
    const disabledNext = computed(() => props.page === pageCount.value);

    const showFirstPageWithEllipsis = computed(
      () => pageCount.value > maxDisplayPageLinks && props.page >= maxDisplayPageLinks,
    );

    const showLastPageWithEllipsis = computed(
      () => pageCount.value > maxDisplayPageLinks && props.page <= pageCount.value - (pageDisplayCount + 1),
    );

    const pageRange = computed(() => {
      // not enough pages to fill range, show them all
      if (pageCount.value <= maxDisplayPageLinks) {
        return Array.from(Array(pageCount.value).keys()).map((value) => value + 1);
      }

      // determine page range to display
      if (props.page <= pageCount.value / 2) {
        // bottom of range calculation
        let startPage = Math.max(props.page - Math.floor(pageDisplayCount / 2), 1);
        let numPages = pageDisplayCount;

        // when the start page would be 2 then also display 1, and if start page is 3 then also display 1 and 2 (no ellipsis)
        if (startPage === 2) {
          startPage = 1;
          numPages += 1;
        } else if (startPage === 3) {
          startPage = 1;
          numPages += 2;
        }

        return Array.from(Array(numPages).keys()).map((value) => startPage + value);
      } else {
        // top of range calculation
        let endPage = Math.min(props.page + Math.floor(pageDisplayCount / 2), pageCount.value);
        let numPages = pageDisplayCount;

        // when the end page would be pageCount - 1 then also display last page,
        // and if end page is pageCount - 2 then also display last page & second last page (no ellipsis)
        if (endPage === pageCount.value - 1) {
          endPage = pageCount.value;
          numPages += 1;
        } else if (endPage === pageCount.value - 2) {
          endPage = pageCount.value;
          numPages += 2;
        }

        return Array.from(Array(numPages).keys()).map((value) => endPage - (numPages - 1) + value);
      }
    });

    const url = (page: number) => props.urlTemplate.replace('{page}', page.toString());

    return {
      pageCount,
      hidePagination,
      previousPage,
      disabledPrevious,
      nextPage,
      disabledNext,
      showFirstPageWithEllipsis,
      showLastPageWithEllipsis,
      pageRange,
      url,
    };
  },
});
