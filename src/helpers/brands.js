// get brands
export const getbrands = (brands, category, type, limit) => {
  const finalbrands = category
    ? brands.filter(
        brand => brand.category.filter(single => single === category)[0]
      )
    : brands;

  if (type && type === "new") {
    const newbrands = finalbrands.filter(single => single.new);
    return newbrands.slice(0, limit ? limit : newbrands.length);
  }
  if (type && type === "bestSeller") {
    return finalbrands
      .sort((a, b) => {
        return b.saleCount - a.saleCount;
      })
      .slice(0, limit ? limit : finalbrands.length);
  }
  if (type && type === "saleItems") {
    const saleItems = finalbrands.filter(
      single => single.discount && single.discount > 0
    );
    return saleItems.slice(0, limit ? limit : saleItems.length);
  }
  return finalbrands.slice(0, limit ? limit : finalbrands.length);
};

// get brand discount price
export const getDiscountPrice = (price, discount) => {
  return discount && discount > 0 ? price - price * (discount / 100) : null;
};

// get brand cart quantity
export const getbrandCartQuantity = (cartItems, brand, color, size) => {
  let brandInCart = cartItems.filter(
    single =>
      single.id === brand.id &&
      (single.selectedbrandColor
        ? single.selectedbrandColor === color
        : true) &&
      (single.selectedbrandsize ? single.selectedbrandsize === size : true)
  )[0];
  if (cartItems.length >= 1 && brandInCart) {
    if (brand.variation) {
      return cartItems.filter(
        single =>
          single.id === brand.id &&
          single.selectedbrandColor === color &&
          single.selectedbrandsize === size
      )[0].quantity;
    } else {
      return cartItems.filter(single => brand.id === single.id)[0].quantity;
    }
  } else {
    return 0;
  }
};

//get brands based on category
export const getSortedbrands = (brands, sortType, sortValue) => {
  if (brands && sortType && sortValue) {
    if (sortType === "category") {
      return brands.filter(
        brand => brand.category.filter(single => single === sortValue)[0]
      );
    }
    if (sortType === "tag") {
      return brands.filter(
        brand => brand.tag.filter(single => single === sortValue)[0]
      );
    }
    if (sortType === "color") {
      return brands.filter(
        brand =>
          brand.variation &&
          brand.variation.filter(single => single.color === sortValue)[0]
      );
    }
    if (sortType === "size") {
      return brands.filter(
        brand =>
          brand.variation &&
          brand.variation.filter(
            single => single.size.filter(single => single.name === sortValue)[0]
          )[0]
      );
    }
    if (sortType === "filterSort") {
      let sortbrands = [...brands];
      if (sortValue === "default") {
        return sortbrands;
      }
      if (sortValue === "priceHighToLow") {
        return sortbrands.sort((a, b) => {
          return b.price - a.price;
        });
      }
      if (sortValue === "priceLowToHigh") {
        return sortbrands.sort((a, b) => {
          return a.price - b.price;
        });
      }
    }
  }
  return brands;
};

// get individual element
const getIndividualItemArray = array => {
  let individualItemArray = array.filter(function(v, i, self) {
    return i === self.indexOf(v);
  });
  return individualItemArray;
};

// get individual categories
export const getIndividualCategories = brands => {
  let brandCategories = [];
  brands &&
    brands.map(brand => {
      return (
        brand.category &&
        brand.category.map(single => {
          return brandCategories.push(single);
        })
      );
    });
  const individualbrandCategories = getIndividualItemArray(brandCategories);
  return individualbrandCategories;
};

// get individual tags
export const getIndividualTags = brands => {
  let brandTags = [];
  brands &&
    brands.map(brand => {
      return (
        brand.tag &&
        brand.tag.map(single => {
          return brandTags.push(single);
        })
      );
    });
  const individualbrandTags = getIndividualItemArray(brandTags);
  return individualbrandTags;
};

// get individual colors
export const getIndividualColors = brands => {
  let brandColors = [];
  brands &&
    brands.map(brand => {
      return (
        brand.variation &&
        brand.variation.map(single => {
          return brandColors.push(single.color);
        })
      );
    });
  const individualbrandColors = getIndividualItemArray(brandColors);
  return individualbrandColors;
};

// get individual sizes
export const getbrandsIndividualSizes = brands => {
  let brandsizes = [];
  brands &&
    brands.map(brand => {
      return (
        brand.variation &&
        brand.variation.map(single => {
          return single.size.map(single => {
            return brandsizes.push(single.name);
          });
        })
      );
    });
  const individualbrandsizes = getIndividualItemArray(brandsizes);
  return individualbrandsizes;
};

// get brand individual sizes
export const getIndividualSizes = brand => {
  let brandsizes = [];
  brand.variation &&
    brand.variation.map(singleVariation => {
      return (
        singleVariation.size &&
        singleVariation.size.map(singleSize => {
          return brandsizes.push(singleSize.name);
        })
      );
    });
  const individualSizes = getIndividualItemArray(brandsizes);
  return individualSizes;
};

export const setActiveSort_twelve =( e, type) => {
  
  let select_query;
  if (type === "category")
    select_query = ".category_type .sidebar-widget-list-left button, .sidebar-widget-tag button, .brand-filter button";
  else if (type === "importamount")
    select_query = ".importamount_type .sidebar-widget-list-left button, .sidebar-widget-tag button, .brand-filter button";

  else if (type === "annualrevenue")
    select_query = ".annualrevenue_type .sidebar-widget-list-left button, .sidebar-widget-tag button, .brand-filter button";

    else if (type === "owner")
    select_query = ".owner_type .sidebar-widget-list-left button, .sidebar-widget-tag button, .brand-filter button";

  else if (type === "offer")
    select_query = ".offer_type .sidebar-widget-list-left button, .sidebar-widget-tag button, .brand-filter button";
  else
    select_query =".sidebar-widget-list-left button, .sidebar-widget-tag button, .brand-filter button";
    
    const filterButtons = document.querySelectorAll(select_query);
    filterButtons.forEach(item => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

export const setActiveLayout = e => {
  const gridSwitchBtn = document.querySelectorAll(".shop-tab button");
  gridSwitchBtn.forEach(item => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

export const toggleShopTopFilter = e => {
  const shopTopFilterWrapper = document.querySelector(
    "#brand-filter-wrapper"
  );
  shopTopFilterWrapper.classList.toggle("active");
  if (shopTopFilterWrapper.style.height) {
    shopTopFilterWrapper.style.height = null;
  } else {
    shopTopFilterWrapper.style.height =
      shopTopFilterWrapper.scrollHeight + "px";
  }
  e.currentTarget.classList.toggle("active");
};
