import { r as __toESM } from "../_runtime.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as contactSchema } from "./contact.schema-xM-yEEfH.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-Bqk7qvw8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-a_IgUM5S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var sendContactEmail = createServerFn({ method: "POST" }).validator((data) => {
	return contactSchema.parse(data);
}).handler(createSsrRpc("14bd7cacbbf3d094600e9cf4eb55af96e5f4006ea54a5ceb80af6655f8a6fa19"));
var stocko_logo_default = "/assets/stocko-logo-DlL9WSAt.png";
var BRAND_IMAGES = [
	"/assets/brand-b1-g1Uyh6Gr.png",
	"/assets/brand-b2-DxLpTXJm.png",
	"/assets/brand-b3-D1Gd7bVu.png",
	"/assets/brand-b4-CHnlJPlI.png",
	"/assets/brand-b5-BHzTzQwR.png",
	"/assets/brand-b6-BoMUZlbK.png",
	"/assets/brand-b7-DPvRJHkQ.png",
	"/assets/brand-b8-BBke0Rl9.png",
	"/assets/brand-b9-CSuizd5u.png",
	"/assets/brand-b10-DKLdo2Jm.png",
	"/assets/brand-b11-FVjojYJF.png"
];
var CATEGORIES = [
	{
		name: "Staples",
		image: "https://images.unsplash.com/photo-1775433205046-86e060feff06?w=800&q=80"
	},
	{
		name: "FMCG",
		image: "https://images.unsplash.com/photo-1739066598279-1297113f5c6a?w=800&q=80"
	},
	{
		name: "Home & Kitchen",
		image: "https://images.unsplash.com/photo-1633536704679-de310869515b?w=800&q=80"
	},
	{
		name: "House & Cleaning",
		image: "https://images.unsplash.com/photo-1623949786120-5cee72ef63f9?w=800&q=80"
	},
	{
		name: "General Merchandising",
		image: "https://images.unsplash.com/photo-1624831466206-5b15053baabb?w=800&q=80"
	},
	{
		name: "Personal Care",
		image: "https://images.unsplash.com/photo-1492552085122-36706c238263?w=800&q=80"
	}
];
var STEPS = [
	{
		title: "Visit Our Store",
		text: "Come to Stocko Wholesale in Kuttiadi — open Monday to Saturday, 8 AM to 6:30 PM."
	},
	{
		title: "Browse & Pick",
		text: "Choose from thousands of products across every category at wholesale prices."
	},
	{
		title: "Pay at Counter",
		text: "Pay for your goods at our checkout — simple, straightforward, no hidden charges."
	},
	{
		title: "Walk Out With Your Stock",
		text: "Carry your goods straight from our store — no waiting needed."
	}
];
var ABOUT_BOXES = [
	{
		icon: "🤝",
		num: "Trusted",
		label: "By Local Businesses"
	},
	{
		icon: "🏪",
		num: "One Stop",
		label: "Shop for Everything",
		highlight: true
	},
	{
		icon: "💡",
		num: "Smart",
		label: "Buying for Businesses",
		highlight: true
	},
	{
		icon: "🌱",
		num: "Growing",
		label: "With Every Business We Serve"
	}
];
var WHY_CARDS = [
	{
		icon: "🏆",
		title: "First of Its Kind in Kerala",
		text: "A pioneering wholesale concept — bringing a new, smarter way to buy stock to businesses across the state."
	},
	{
		icon: "💰",
		title: "True Wholesale Prices",
		text: "Buy in bulk and save significantly — the more you buy, the more you save."
	},
	{
		icon: "🏠",
		title: "Walk In & Walk Out",
		text: "Visit our store in Kuttiadi, browse our shelves, pay, and carry your stock home immediately."
	},
	{
		icon: "📦",
		title: "Thousands of Products",
		text: "Every category your business needs, all available under one roof at Stocko."
	},
	{
		icon: "✅",
		title: "Quality You Can Trust",
		text: "Every product on our shelves is sourced from verified suppliers and meets quality standards."
	},
	{
		icon: "📅",
		title: "10+ Years of Experience",
		text: "Over a decade of serving businesses across Kozhikode with the best wholesale products."
	}
];
var WHATSAPP_ICON_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.84 1.078-.173.145-.64.06-.909-.06-.463-.21-1.486-.66-2.25-1.53-.646-.75-1.092-1.67-1.236-2.01-.144-.34-.015-.63.075-.75.15-.18.36-.42.54-.63.15-.18.225-.3.3-.45.075-.15.03-.345-.03-.495-.06-.15-.675-1.62-.923-2.22-.24-.57-.487-.5-.667-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413";
function scrollToSection(id) {
	document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
function Nav() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const links = [
		{
			label: "About",
			target: "about-section"
		},
		{
			label: "How It Works",
			target: "how-section"
		},
		{
			label: "Products",
			target: "categories-section"
		},
		{
			label: "Contact",
			target: "contact-section"
		}
	];
	const handleNavClick = (target) => {
		setMenuOpen(false);
		scrollToSection(target);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sw-nav-wrapper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "sw-nav",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sw-logo",
						onClick: () => handleNavClick("about-section"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: stocko_logo_default,
							alt: "Stocko Wholesale"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "sw-nav-links",
						children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => handleNavClick(link.target),
							children: link.label
						}) }, link.target))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "sw-nav-cta",
						onClick: () => handleNavClick("contact-section"),
						children: "Visit Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: `sw-nav-toggle ${menuOpen ? "open" : ""}`,
						onClick: () => setMenuOpen((prev) => !prev),
						"aria-label": menuOpen ? "Close menu" : "Open menu",
						"aria-expanded": menuOpen,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sw-nav-toggle-bar" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sw-nav-toggle-bar" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sw-nav-toggle-bar" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `sw-mobile-menu ${menuOpen ? "open" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "sw-mobile-links",
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => handleNavClick(link.target),
						children: link.label
					}) }, link.target))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "sw-mobile-cta",
					onClick: () => handleNavClick("contact-section"),
					children: "Visit Us"
				})]
			}),
			menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sw-mobile-backdrop",
				onClick: () => setMenuOpen(false),
				"aria-hidden": "true"
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sw-hero",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sw-hero-badge",
				children: "★ Kerala's First Wholesale Store of Its Kind"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
				"Buy More. Pay Less.",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Save Bigger." })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Stocko Wholesale brings you an entirely new way to shop for your business — walk in, pick from thousands of products, and walk out with your stock at the best wholesale prices." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sw-hero-btns",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "sw-btn-primary",
					onClick: () => scrollToSection("categories-section"),
					children: "Explore Products"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "sw-btn-outline",
					onClick: () => scrollToSection("how-section"),
					children: "How It Works"
				})]
			})
		]
	});
}
function Index() {
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	const [feedback, setFeedback] = (0, import_react.useState)(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (submitting) return;
		const form = e.currentTarget;
		const formData = new FormData(form);
		const name = String(formData.get("name") ?? "").trim();
		const business = String(formData.get("business") ?? "").trim();
		const phone = String(formData.get("phone") ?? "").trim();
		const email = String(formData.get("email") ?? "").trim();
		const message = String(formData.get("message") ?? "").trim();
		if (!name || !phone) {
			setFeedback({
				type: "error",
				message: "Please fill in all required fields (Your name and Phone number)."
			});
			return;
		}
		setSubmitting(true);
		setFeedback(null);
		try {
			const res = await sendContactEmail({ data: {
				name,
				business,
				phone,
				email,
				message
			} });
			if (res.success) {
				setSent(true);
				setFeedback({
					type: "success",
					message: res.message
				});
				form.reset();
				setTimeout(() => {
					setSent(false);
					setFeedback(null);
				}, 6e3);
			} else setFeedback({
				type: "error",
				message: res.message
			});
		} catch (err) {
			const errorMsg = err instanceof Error ? err.message : "Something went wrong while sending your message. Please try again.";
			setFeedback({
				type: "error",
				message: errorMsg
			});
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sw-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sw-hero-wrapper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sw-first-banner",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "🏆 Stocko Wholesale — Kerala's pioneering wholesale store. A first-of-its-kind shopping experience for businesses across the state." })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sw-stats",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sw-stat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sw-stat-num",
							children: "Kerala's"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sw-stat-label",
							children: "First Wholesale Store"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sw-stat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sw-stat-num",
							children: "10+"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sw-stat-label",
							children: "Years of Experience"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sw-stat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sw-stat-num",
							children: "Walk In"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sw-stat-label",
							children: "Pick & Pay Instantly"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sw-stat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sw-stat-num",
							children: "Best"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sw-stat-label",
							children: "Wholesale Prices"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "sw-section sw-about",
				id: "about-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sw-about-text",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sw-section-tag",
							children: "Who We Are"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "sw-section-title",
							children: "Kerala's First Store of Its Kind"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sw-section-sub",
							children: "Stocko Wholesale is a pioneering wholesale store in Kerala where businesses can walk in, browse thousands of products across every category, and carry their stock home — all at bulk wholesale prices."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								color: "var(--sw-muted)",
								fontSize: "0.95rem",
								lineHeight: 1.7
							},
							children: "We are a physical store in Kuttiadi — just walk in, pick what your business needs, pay, and leave with your goods. Simple as that."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sw-about-visual",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "sw-about-visual-bg" }), ABOUT_BOXES.map((box) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `sw-about-stat-box${box.highlight ? " highlight" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sw-about-stat-icon",
								children: box.icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sw-about-stat-num",
								style: {
									color: box.highlight ? "var(--sw-blue)" : void 0,
									fontSize: box.num === "Growing" ? "1.3rem" : "1.4rem"
								},
								children: box.num
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sw-about-stat-label",
								children: box.label
							})
						]
					}, box.label))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "sw-section sw-how",
				id: "how-section",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sw-section-tag",
						children: "How It Works"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "sw-section-title",
						children: "Wholesale Made Simple"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "sw-section-sub",
						children: "Shopping wholesale at Stocko is as easy as walking into a store — because that's exactly what it is."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sw-steps",
						children: STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sw-step",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "sw-step-num",
									children: i + 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: step.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.text })
							]
						}, step.title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "sw-section sw-categories",
				id: "categories-section",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sw-section-tag",
						children: "Product Categories"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "sw-section-title",
						children: "Everything for Your Business"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "sw-section-sub",
						children: "Click on any category to explore all products available at Stocko Wholesale."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sw-cat-grid",
						children: CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sw-cat-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: cat.image,
								alt: cat.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sw-cat-overlay",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "sw-cat-name",
									children: cat.name
								})
							})]
						}, cat.name))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "sw-brands-strip",
				id: "brands-section",
				style: {
					paddingLeft: 0,
					paddingRight: 0
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sw-brands-strip-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sw-section-tag",
						children: "Brands We Stock"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Trusted by the Biggest Names in the Business" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sw-brands-marquee-wrap",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sw-brands-track",
						children: [0, 1].map((set) => BRAND_IMAGES.map((asset, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sw-brand-chip",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: asset,
								alt: `Brand logo ${i + 1}`
							})
						}, `${set}-${i}`)))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "sw-section sw-why",
				id: "why-section",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sw-section-tag",
						children: "Why Choose Stocko"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "sw-section-title",
						children: "A Smarter Way to Buy Wholesale"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "sw-section-sub",
						children: "We're redefining how businesses in Kerala buy their stock."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sw-why-grid",
						children: WHY_CARDS.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sw-why-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "sw-why-icon",
									children: card.icon
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: card.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: card.text })
							]
						}, card.title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "sw-section sw-contact",
				id: "contact-section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sw-contact-inner",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sw-contact-info",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sw-section-tag",
								style: { color: "var(--sw-yellow)" },
								children: "Find Us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "sw-section-title",
								children: "Visit Stocko Wholesale"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "sw-section-sub",
								children: "Come in and experience Kerala's first wholesale store for yourself."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sw-contact-detail",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📍" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Vattakkandi Para, Kuttiadi, Kozhikode, Kerala" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sw-contact-detail",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📞" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+917034499966",
									children: "+91 70344 99966"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sw-contact-detail",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✉️" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "stockowholesale@gmail.com" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sw-contact-detail",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🕓" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mon–Sat: 8:00 AM – 6:30 PM" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "sw-whatsapp-btn",
								href: "https://wa.me/917034499966?text=Hi%20Stocko%20Wholesale%2C%20I%20have%20an%20enquiry.",
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									width: "22",
									height: "22",
									viewBox: "0 0 24 24",
									fill: "oklch(1 0 0)",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: WHATSAPP_ICON_PATH })
								}), "Chat on WhatsApp"]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "sw-contact-form",
						onSubmit: handleSubmit,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								name: "name",
								placeholder: "Your name",
								required: true,
								disabled: submitting
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								name: "business",
								placeholder: "Business name",
								disabled: submitting
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "tel",
								name: "phone",
								placeholder: "Phone number",
								required: true,
								disabled: submitting
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								name: "email",
								placeholder: "Email address",
								disabled: submitting
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 4,
								name: "message",
								placeholder: "Any questions for us?",
								disabled: submitting
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: submitting,
								className: sent ? "sent" : void 0,
								children: submitting ? "Sending..." : sent ? "Message Sent!" : "Send Message"
							}),
							feedback && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `sw-form-msg ${feedback.type}`,
								role: "alert",
								children: feedback.message
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "sw-footer",
				children: [
					"© 2026 ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Stocko Wholesale" }),
					". All rights reserved. \xA0|\xA0 Kerala's First Wholesale Store of Its Kind"
				]
			})
		]
	});
}
//#endregion
export { Index as component };
