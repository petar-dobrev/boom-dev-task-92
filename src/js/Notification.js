import classNames from "classnames";
import { formatCurrency } from "./utils";

export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
    this.notifications = document.querySelector(".notifications");
  }

  empty(container) {
    container.innerHTML = "";
  }

  render({ type, price }) {
    console.log(type, price);
    price = formatCurrency(price);
    const template = `
<div class="notification type-${type} ${classNames({
      "is-danger": type === Notification.types.HAWAIIAN,
    })}">
  <button class="delete"></button>
  🍕 <span class="type">${type}</span> (<span class="price">${price}</span>) has been added to your order.
</div>
    `;

    this.container.innerHTML = template;
    this.container.querySelector(".delete").addEventListener("click", () => {
      this.empty(this.container);
    });

    this.notifications.appendChild(this.container);
  }
}
