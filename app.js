/* ==========================================================================
   ROSE GARDEN - FULL-STACK CLIENT LOGIC WITH AUTOMATIC SEED FALLBACK
   ========================================================================== */

const API_BASE = window.location.protocol.startsWith('http')
  ? `${window.location.origin}/api`
  : 'http://localhost:8080/api';

// Seed database for instant rendering under any environment
const DEFAULT_SEED_DB = {
  roses: [
    {
      id: "rose-1",
      name: "Velvet Royal Crimson",
      category: "Hybrid Tea",
      shortDescription: "Classic deep crimson red rose with rich, intense fragrance and long velvet petals.",
      description: "The Velvet Royal Crimson is the crown jewel of classic garden roses. Celebrated for its deep blood-red velvety petals, long sturdy stems ideal for vase arrangements, and an intoxicating classic damask perfume that fills any garden or room.",
      price: 38.00,
      availability: "In Stock",
      sunlight: "Full Sun (6+ hours)",
      fragrance: "High (Strong Damask)",
      height: "4 - 5 feet",
      featured: true,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rose-2",
      name: "Graceful Pink David Austin",
      category: "David Austin",
      shortDescription: "English garden rose with full rosette blooms in delicate pastel blush pink.",
      description: "A magnificent English shrub rose featuring cupped rosettes packed with over 90 delicate blush pink petals. Offers a fruity myrrh fragrance with notes of honey and vanilla. Highly disease resistant and repeat blooms throughout the season.",
      price: 45.00,
      availability: "In Stock",
      sunlight: "Full Sun to Partial Shade",
      fragrance: "Very High (Fruity Myrrh)",
      height: "3 - 4 feet",
      featured: true,
      image: "https://images.unsplash.com/photo-1534710961216-75c88202f43e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rose-3",
      name: "Sunburst Amber Gold",
      category: "Grandiflora",
      shortDescription: "Vibrant golden-apricot rose with citrus notes and lush dark glossy foliage.",
      description: "Radiant as the morning sun, Sunburst Amber Gold displays dramatic clusters of warm apricot-yellow blooms with copper undertones. Possesses a clean citrus fragrance and exceptional heat tolerance.",
      price: 32.50,
      availability: "In Stock",
      sunlight: "Full Sun",
      fragrance: "Medium (Fresh Citrus)",
      height: "5 - 6 feet",
      featured: true,
      image: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rose-4",
      name: "Avalanche Pure White",
      category: "Floribunda",
      shortDescription: "Pristine snow-white blooms that bloom continuously in dense fragrant clusters.",
      description: "Symbolizing purity and elegance, Avalanche Pure White is a floribunda rose producing massive sprays of porcelain-white blossoms with subtle hint of ivory center. Perfect for weddings, borders, and fresh cut arrangements.",
      price: 29.00,
      availability: "In Stock",
      sunlight: "Full Sun",
      fragrance: "Medium (Sweet Tea)",
      height: "3 - 4 feet",
      featured: true,
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rose-5",
      name: "Coral Sunset Peony Rose",
      category: "Garden Roses",
      shortDescription: "Peony-shaped rose with coral peach tones that gracefully fade to warm apricot.",
      description: "An enchanting garden rose with dense peony-style ruffles. Begins as a deep sunset coral pink before softening into warm peach and cream hues. Excellent choice for romantic garden landscapes.",
      price: 42.00,
      availability: "Pre-Order",
      sunlight: "Full Sun",
      fragrance: "High (Sweet Clove & Apple)",
      height: "4 feet",
      featured: false,
      image: "https://images.unsplash.com/photo-1548625361-185b306b4b47?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rose-6",
      name: "Lavender Mist Enchantment",
      category: "Hybrid Tea",
      shortDescription: "Rare mauve-lavender rose with subtle silver sheen and strong spiced fragrance.",
      description: "A rare collector's delight, Lavender Mist boasts spiral-shaped blooms of soft mauve violet with a silvery outer glow. Famous for its powerful citrus spice fragrance and elegant long cut stems.",
      price: 48.00,
      availability: "In Stock",
      sunlight: "Full Sun to Partial Shade",
      fragrance: "Very High (Citrus Spice)",
      height: "4 - 5 feet",
      featured: true,
      image: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rose-7",
      name: "Eden Arch Climbing Rose",
      category: "Climbing Roses",
      shortDescription: "Vigorous climber adorned with heavy pale pink and cream nostalgic blooms.",
      description: "Voted world's favorite rose, the Eden Climber cascades gracefully over arches, pergolas, and garden walls. Generates hundreds of large cupped pink and white blossoms from spring to late autumn.",
      price: 54.00,
      availability: "In Stock",
      sunlight: "Full Sun",
      fragrance: "Medium (Gentle Old Rose)",
      height: "10 - 12 feet (Climber)",
      featured: false,
      image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rose-8",
      name: "Midnight Passion Burgundy",
      category: "Grandiflora",
      shortDescription: "Mysterious near-black dark red velvet rose with dark green foliage.",
      description: "Dramatically dark burgundy petals that appear nearly black under shadow and open into rich magenta crimson. A showstopper in modern floral landscape designs.",
      price: 36.00,
      availability: "In Stock",
      sunlight: "Full Sun",
      fragrance: "High (Spicy Anise & Rose)",
      height: "5 feet",
      featured: false,
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rose-9",
      name: "Sweet Peach Floribunda",
      category: "Floribunda",
      shortDescription: "Charming cluster rose with warm peach, salmon, and honey shades.",
      description: "Compact, bushy, and bursting with soft peach clusters. Perfect for patio containers, low garden hedges, and delicate flower garden borders.",
      price: 27.50,
      availability: "In Stock",
      sunlight: "Full Sun",
      fragrance: "Medium (Sweet Peach)",
      height: "2.5 - 3 feet",
      featured: false,
      image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rose-10",
      name: "Golden Celebration David Austin",
      category: "David Austin",
      shortDescription: "Huge rich gold cupped flowers with tea rose aroma and arching growth.",
      description: "One of the largest flowered English roses, boasting majestic cup-shaped blooms in deep rich yellow gold. Emits a warm tea fragrance with notes of strawberry and sauterne wine.",
      price: 49.00,
      availability: "Seasonal",
      sunlight: "Full Sun",
      fragrance: "Very High (Tea & Strawberry)",
      height: "4.5 feet",
      featured: false,
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rose-11",
      name: "Miniature Ruby Jewel",
      category: "Miniature",
      shortDescription: "Petite ruby red rose plant perfect for indoor pots and patio tables.",
      description: "A micro-rose sensation! Petite ruby red blossoms bloom tirelessly on a compact 12-inch bush. Ideal for indoor windowsill displays, garden balconies, and gift planters.",
      price: 22.00,
      availability: "In Stock",
      sunlight: "Full Sun to Partial Sun",
      fragrance: "Light (Fresh)",
      height: "1 - 1.5 feet",
      featured: false,
      image: "https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rose-12",
      name: "Heritage Blush Antique",
      category: "Garden Roses",
      shortDescription: "Heirloom style soft pink rose with classic quartered blossom center.",
      description: "Inspired by Victorian rose gardens, Heritage Blush displays perfect quartered blooms with translucent blush petals and an unmistakable antique perfume.",
      price: 39.50,
      availability: "In Stock",
      sunlight: "Full Sun",
      fragrance: "High (Classic Old Rose)",
      height: "4 feet",
      featured: false,
      image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=800&q=80"
    }
  ],
  services: [
    {
      id: "srv-1",
      name: "Garden Design",
      shortDescription: "Bespoke rose garden architectural planning, soil preparation, and planting layouts tailored to your estate.",
      description: "Our master landscape architects craft custom rose garden designs that harmonize with your property architecture. We analyze soil pH, sunlight trajectory, drainage, and seasonal bloom cycles to curate a stunning rose landscape.",
      features: ["3D Visual Design Blueprint", "Soil Preparation & pH Tuning", "Architectural Planting Layouts", "Companion Plant Selection"],
      startingPrice: "$450.00",
      image: "https://images.unsplash.com/photo-1558904541-efa8c196b27d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-2",
      name: "Rose Planting",
      shortDescription: "Expert planting of bare-root and container roses with specialized organic soil amendments.",
      description: "Proper planting is the secret to thriving roses. Our horticultural team carefully prepares planting holes, infuses organic compost and mycorrhizal fungi, and anchors young rose roots for maximum vigor.",
      features: ["Bare-root & Pot Planting", "Mycorrhizal & Compost Treatment", "Mulching & Root Protection", "Initial Deep Hydration Treatment"],
      startingPrice: "$180.00",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-3",
      name: "Garden Maintenance",
      shortDescription: "Scheduled seasonal pruning, organic fertilizing, weed control, and blooming care.",
      description: "Keep your rose garden vibrant year-round. Our monthly or seasonal care packages include expert winter/spring pruning, deadheading, soil aeration, and organic fertilizing.",
      features: ["Seasonal Spring/Winter Pruning", "Organic Feeding Schedule", "Deadheading & Sanitation", "Weed & Soil Management"],
      startingPrice: "$120.00 / month",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-4",
      name: "Rose Care & Health",
      shortDescription: "Diagnostic consultations and eco-friendly treatment for pests, black spot, and fungal diseases.",
      description: "Is your rose bush experiencing yellow leaves or black spot? Our plant doctors diagnose ailments and apply child- and pet-safe organic remedies to restore peak plant vitality.",
      features: ["Diagnostic Leaf & Soil Analysis", "Eco-friendly Organic Sprays", "Pest & Aphid Management", "Fungal Disease Eradication"],
      startingPrice: "$95.00",
      image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-5",
      name: "Event Flower Decoration",
      shortDescription: "Luxury rose floral styling for weddings, galas, anniversaries, and corporate events.",
      description: "Transform your event into a botanical wonderland. From grand rose archways and head table arrangements to romantic centerpieces, our floral artists design breathtaking floral atmospheres.",
      features: ["Grand Rose Archways", "Custom Centerpieces & Runners", "Bridal & Boutonnière Florals", "On-site Venue Styling & Teardown"],
      startingPrice: "$850.00",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-6",
      name: "Custom Flower Arrangements",
      shortDescription: "Handcrafted rose bouquets delivered fresh in signature presentation boxes or vases.",
      description: "Express love, gratitude, or celebration with our hand-picked artisan rose arrangements. Delivered fresh from our gardens in eco-friendly presentation boxes or ceramic vases.",
      features: ["Fresh Garden-Cut Selection", "Custom Color Palette Request", "Handwritten Calligraphy Card", "Same-Day Local Delivery Available"],
      startingPrice: "$75.00",
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80"
    }
  ],
  gallery: [
    {
      id: "gal-1",
      title: "Velvet Red Blooming Garden",
      category: "Roses",
      caption: "A spectacular summer bloom of Velvet Royal Crimson roses in our botanical estate.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "gal-2",
      title: "Blush Pink Rose Archway",
      category: "Gardens",
      caption: "Hand-carved iron gazebo adorned with climbing Eden roses and pink garden roses.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "gal-3",
      title: "Romantic Wedding Rose Arch",
      category: "Events",
      caption: "Luxury wedding ceremony setup featuring over 1,500 white and peach fresh garden roses.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "gal-4",
      title: "Signature Sunset Bouquet",
      category: "Arrangements",
      caption: "Artisanal bouquet combining David Austin pink roses with coral spray roses and eucalyptus.",
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "gal-5",
      title: "English Country Garden Walkway",
      category: "Gardens",
      caption: "Cobblestone pathway bordered by lush Floribunda and Grandiflora rose bushes.",
      image: "https://images.unsplash.com/photo-1558904541-efa8c196b27d?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "gal-6",
      title: "Golden Hour Rose Dewdrops",
      category: "Roses",
      caption: "Close-up macro of morning dew resting on Sunburst Amber Gold rose petals.",
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "gal-7",
      title: "Grand Gala Floral Table Runner",
      category: "Events",
      caption: "Extravagant 20-foot rose runner for a corporate charity gala at the botanic glasshouse.",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "gal-8",
      title: "Porcelain White Flower Basket",
      category: "Arrangements",
      caption: "Rustic woven basket overflowing with pure white Avalanche roses and white lilies.",
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "gal-9",
      title: "Lavender Rose Cottage Garden",
      category: "Roses",
      caption: "Rare lavender mist roses growing along a white picket cottage fence.",
      image: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "gal-10",
      title: "Botanical Glasshouse Nursery",
      category: "Gardens",
      caption: "Inside our climate-controlled propagation glasshouse where our roses are nurtured.",
      image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  testimonials: [
    {
      id: "tst-1",
      name: "Eleanor Vance",
      role: "Estate Homeowner",
      rating: 5,
      comment: "Rose Garden transformed our backyard into a breathtaking English country rose haven. Their team selected disease-resistant varieties that bloom relentlessly. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "tst-2",
      name: "Marcus & Sophia Sterling",
      role: "Wedding Clients",
      rating: 5,
      comment: "The floral archway and table arrangements for our wedding were beyond our wildest dreams. The scent of fresh David Austin roses filled the venue!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "tst-3",
      name: "Dr. Clara Hastings",
      role: "Botanical Enthusiast",
      rating: 5,
      comment: "As a rose collector, I am extremely particular about root health and cultivar authenticity. Rose Garden delivers the healthiest, most fragrant bare-root roses I have ever purchased.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "tst-4",
      name: "Julian Thorne",
      role: "Boutique Hotel Director",
      rating: 5,
      comment: "We subscribe to their weekly custom flower arrangements for our lobby. Our guests constantly compliment the fresh fragrance and stunning rose designs.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "tst-5",
      name: "Beatrice Montgomery",
      role: "Garden Club President",
      rating: 5,
      comment: "Their rose maintenance team saved my vintage climber from black spot disease. Professional, knowledgeable, and deeply passionate about roses!",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    }
  ],
  users: [
    {
      id: "usr-admin",
      name: "Rose Garden Admin",
      email: "admin@rosegarden.com",
      password: "admin128",
      role: "admin",
      phone: "+1 (800) 555-7673",
      address: "742 Evergreen Terrace, Floral Valley, CA"
    },
    {
      id: "usr-customer",
      name: "Sarah Jenkins",
      email: "sarah@example.com",
      password: "password123",
      role: "customer",
      phone: "+1 (555) 234-5678",
      address: "128 Rosewood Lane, Pasadena, CA"
    }
  ],
  favorites: [
    { userId: "usr-customer", roseId: "rose-1" },
    { userId: "usr-customer", roseId: "rose-2" }
  ],
  service_requests: [
    {
      id: "REQ-1001",
      userId: "usr-customer",
      userName: "Sarah Jenkins",
      userEmail: "sarah@example.com",
      userPhone: "+1 (555) 234-5678",
      serviceId: "srv-1",
      serviceName: "Garden Design",
      preferredDate: "2026-10-15",
      preferredTime: "Morning (9:00 AM - 12:00 PM)",
      message: "We would like a full 3D layout plan for our front yard garden with pink and white roses.",
      status: "Confirmed",
      createdAt: "2026-09-10T10:30:00Z"
    }
  ],
  inquiries: [
    {
      id: "INQ-5001",
      name: "David Miller",
      email: "david.m@example.com",
      phone: "+1 (555) 987-6543",
      subject: "Wholesale Rose Nursery Order",
      message: "Hello, we operate a garden center in Northern California and would like to inquire about bare-root wholesale pricing for David Austin roses.",
      status: "New",
      createdAt: "2026-09-12T09:15:00Z"
    }
  ]
};

// Main Application Controller
const App = {
  db: JSON.parse(JSON.stringify(DEFAULT_SEED_DB)),
  currentUser: null,
  activeView: 'home',
  activeCategory: 'All',
  searchQuery: '',
  priceFilter: 'All',
  availabilityFilter: 'All',
  sortOrder: 'featured',
  activeGalleryCategory: 'All',
  currentLightboxIndex: 0,
  activeModal: null,
  selectedRoseForModal: null,

  async init() {
    await this.loadDatabase();
    this.restoreUserSession();
    this.bindEvents();
    this.handleRouting();
    this.renderAll();
    console.log('🌹 Rose Garden Application initialized & ready!');
  },

  async loadDatabase() {
    let loadedFromApi = false;
    try {
      const res = await fetch(`${API_BASE}/db`, { method: 'GET' });
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.roses) && data.roses.length > 0) {
          this.db = data;
          localStorage.setItem('rosegarden_db', JSON.stringify(this.db));
          loadedFromApi = true;
        }
      }
    } catch (e) {
      console.warn('Backend API connection offline/unreachable. Using local storage fallback.');
    }

    if (!loadedFromApi) {
      const local = localStorage.getItem('rosegarden_db');
      if (local) {
        try {
          const parsed = JSON.parse(local);
          if (parsed && Array.isArray(parsed.roses) && parsed.roses.length > 0) {
            this.db = parsed;
          }
        } catch (err) {
          console.error('Local storage parse error, falling back to seed database.');
        }
      }
    }

    // Ensure fallback safety: db must never be empty
    if (!this.db || !Array.isArray(this.db.roses) || this.db.roses.length === 0) {
      this.db = JSON.parse(JSON.stringify(DEFAULT_SEED_DB));
      localStorage.setItem('rosegarden_db', JSON.stringify(this.db));
    }
  },

  async syncDatabase() {
    localStorage.setItem('rosegarden_db', JSON.stringify(this.db));
    try {
      await fetch(`${API_BASE}/db`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.db)
      });
    } catch (e) {
      // LocalStorage is already saved
    }
  },

  restoreUserSession() {
    const session = localStorage.getItem('rosegarden_user');
    if (session) {
      try {
        const user = JSON.parse(session);
        const match = this.db.users.find(u => u.id === user.id);
        if (match) {
          this.currentUser = match;
        }
      } catch (e) {
        localStorage.removeItem('rosegarden_user');
      }
    }
  },

  bindEvents() {
    window.addEventListener('hashchange', () => this.handleRouting());

    const toggle = document.getElementById('mobileToggle');
    const drawer = document.getElementById('mobileDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    if (toggle && drawer && backdrop) {
      toggle.addEventListener('click', () => {
        drawer.classList.add('open');
        backdrop.classList.add('open');
      });
      backdrop.addEventListener('click', () => {
        drawer.classList.remove('open');
        backdrop.classList.remove('open');
      });
    }

    const searchInput = document.getElementById('roseSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderRosesCatalog();
      });
    }

    const catSelect = document.getElementById('roseCategoryFilter');
    if (catSelect) {
      catSelect.addEventListener('change', (e) => {
        this.activeCategory = e.target.value;
        this.renderRosesCatalog();
      });
    }

    const priceSelect = document.getElementById('rosePriceFilter');
    if (priceSelect) {
      priceSelect.addEventListener('change', (e) => {
        this.priceFilter = e.target.value;
        this.renderRosesCatalog();
      });
    }

    const availSelect = document.getElementById('roseAvailFilter');
    if (availSelect) {
      availSelect.addEventListener('change', (e) => {
        this.availabilityFilter = e.target.value;
        this.renderRosesCatalog();
      });
    }

    const sortSelect = document.getElementById('roseSortFilter');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.sortOrder = e.target.value;
        this.renderRosesCatalog();
      });
    }

    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal-overlay');
        if (modal) this.closeModal(modal.id);
      });
    });

    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeModal(modal.id);
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllModals();
        this.closeLightbox();
      }
      if (document.getElementById('lightboxModal')?.classList.contains('open')) {
        if (e.key === 'ArrowRight') this.navigateLightbox(1);
        if (e.key === 'ArrowLeft') this.navigateLightbox(-1);
      }
    });

    this.bindFormHandlers();
  },

  handleRouting() {
    let hash = window.location.hash.replace('#', '') || 'home';
    
    if (hash === 'admin') {
      if (!this.currentUser || this.currentUser.role !== 'admin') {
        this.showToast('Admin access required. Log in as Admin (admin@rosegarden.com / admin128)', 'error');
        this.openAuthModal('login');
        window.location.hash = '#home';
        hash = 'home';
      }
    }

    if (hash === 'dashboard') {
      if (!this.currentUser) {
        this.showToast('Please log in to view your account dashboard.', 'error');
        this.openAuthModal('login');
        window.location.hash = '#home';
        hash = 'home';
      }
    }

    this.activeView = hash;

    document.querySelectorAll('.page-view').forEach(view => {
      view.classList.remove('active');
    });

    const targetView = document.getElementById(`view-${hash}`);
    if (targetView) {
      targetView.classList.add('active');
      window.scrollTo(0, 0);
    } else {
      document.getElementById('view-home').classList.add('active');
    }

    document.querySelectorAll('.nav-link').forEach(link => {
      const linkHash = link.getAttribute('href')?.replace('#', '');
      if (linkHash === hash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    document.getElementById('mobileDrawer')?.classList.remove('open');
    document.getElementById('drawerBackdrop')?.classList.remove('open');

    if (hash === 'dashboard') this.renderUserDashboard();
    if (hash === 'admin') this.renderAdminDashboard();
  },

  renderAll() {
    this.renderHeaderAuth();
    this.renderFeaturedRoses();
    this.renderRosesCatalog();
    this.renderServices();
    this.renderGallery();
    this.renderTestimonials();
  },

  renderHeaderAuth() {
    const area = document.getElementById('headerAuthArea');
    if (!area) return;

    if (this.currentUser) {
      const isAdmin = this.currentUser.role === 'admin';
      area.innerHTML = `
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <a href="${isAdmin ? '#admin' : '#dashboard'}" class="btn btn-secondary btn-sm" style="display:flex; align-items:center; gap:0.4rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            ${this.escapeHtml(this.currentUser.name.split(' ')[0])} (${isAdmin ? 'Admin' : 'Account'})
          </a>
          <button onclick="App.logout()" class="btn btn-outline btn-sm" title="Log Out">
            Logout
          </button>
        </div>
      `;
    } else {
      area.innerHTML = `
        <button onclick="App.openAuthModal('login')" class="btn btn-outline btn-sm">Log In</button>
        <button onclick="App.openAuthModal('signup')" class="btn btn-primary btn-sm">Sign Up</button>
      `;
    }
  },

  renderFeaturedRoses() {
    const container = document.getElementById('featuredRosesGrid');
    if (!container) return;

    const featured = (this.db.roses || []).filter(r => r.featured).slice(0, 4);
    container.innerHTML = featured.map(rose => this.createRoseCardHtml(rose)).join('');
  },

  renderRosesCatalog() {
    const container = document.getElementById('rosesCatalogGrid');
    if (!container) return;

    let list = [...(this.db.roses || [])];

    if (this.activeCategory !== 'All') {
      list = list.filter(r => r.category === this.activeCategory);
    }

    if (this.searchQuery) {
      list = list.filter(r => 
        r.name.toLowerCase().includes(this.searchQuery) || 
        r.shortDescription.toLowerCase().includes(this.searchQuery) ||
        r.category.toLowerCase().includes(this.searchQuery)
      );
    }

    if (this.priceFilter === 'under30') {
      list = list.filter(r => r.price < 30);
    } else if (this.priceFilter === '30to60') {
      list = list.filter(r => r.price >= 30 && r.price <= 60);
    } else if (this.priceFilter === 'over60') {
      list = list.filter(r => r.price > 60);
    }

    if (this.availabilityFilter !== 'All') {
      list = list.filter(r => r.availability === this.availabilityFilter);
    }

    if (this.sortOrder === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (this.sortOrder === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    const countElem = document.getElementById('roseResultsCount');
    if (countElem) countElem.innerText = `${list.length} roses found`;

    if (list.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-icon">🌹</div>
          <h3 class="font-serif" style="font-size:1.5rem; margin-bottom:0.5rem;">No Roses Found</h3>
          <p style="color:var(--text-muted); margin-bottom:1.5rem;">Try adjusting your search terms or filters to explore our rose nursery.</p>
          <button onclick="App.resetRoseFilters()" class="btn btn-secondary btn-sm">Reset All Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(rose => this.createRoseCardHtml(rose)).join('');
  },

  resetRoseFilters() {
    this.searchQuery = '';
    this.activeCategory = 'All';
    this.priceFilter = 'All';
    this.availabilityFilter = 'All';
    this.sortOrder = 'featured';

    const searchIn = document.getElementById('roseSearchInput');
    const catIn = document.getElementById('roseCategoryFilter');
    const priceIn = document.getElementById('rosePriceFilter');
    const availIn = document.getElementById('roseAvailFilter');
    const sortIn = document.getElementById('roseSortFilter');

    if (searchIn) searchIn.value = '';
    if (catIn) catIn.value = 'All';
    if (priceIn) priceIn.value = 'All';
    if (availIn) availIn.value = 'All';
    if (sortIn) sortIn.value = 'featured';

    this.renderRosesCatalog();
  },

  createRoseCardHtml(rose) {
    const isFav = this.isFavorite(rose.id);
    const availClass = rose.availability === 'In Stock' ? 'in-stock' : 'pre-order';

    return `
      <div class="rose-card">
        <div class="rose-card-image-wrap">
          <img src="${this.escapeHtml(rose.image)}" alt="${this.escapeHtml(rose.name)}" loading="lazy">
          <span class="badge-availability ${availClass}">${this.escapeHtml(rose.availability)}</span>
          <button onclick="App.toggleFavorite('${rose.id}')" class="btn-favorite ${isFav ? 'active' : ''}" title="Add to Favorites">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
        </div>
        <div class="rose-card-body">
          <span class="rose-category-tag">${this.escapeHtml(rose.category)}</span>
          <h3 class="rose-title">${this.escapeHtml(rose.name)}</h3>
          <p class="rose-desc">${this.escapeHtml(rose.shortDescription)}</p>
          <div class="rose-card-footer">
            <span class="rose-price">$${(rose.price || 0).toFixed(2)}</span>
            <button onclick="App.openRoseDetailModal('${rose.id}')" class="btn btn-outline btn-sm">View Details</button>
          </div>
        </div>
      </div>
    `;
  },

  openRoseDetailModal(roseId) {
    const rose = this.db.roses.find(r => r.id === roseId);
    if (!rose) return;

    this.selectedRoseForModal = rose;
    const isFav = this.isFavorite(rose.id);

    const body = document.getElementById('roseDetailModalBody');
    if (!body) return;

    body.innerHTML = `
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:2.5rem; align-items:start;">
        <div style="border-radius:var(--radius-md); overflow:hidden; box-shadow:var(--shadow-md);">
          <img src="${this.escapeHtml(rose.image)}" alt="${this.escapeHtml(rose.name)}" style="width:100%; height:380px; object-fit:cover;">
        </div>
        <div>
          <span class="rose-category-tag">${this.escapeHtml(rose.category)}</span>
          <h2 class="font-serif" style="font-size:2rem; margin-bottom:0.5rem; color:var(--primary-green);">${this.escapeHtml(rose.name)}</h2>
          <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">
            <span class="rose-price" style="font-size:1.6rem;">$${(rose.price || 0).toFixed(2)}</span>
            <span class="badge-availability ${rose.availability === 'In Stock' ? 'in-stock' : 'pre-order'}">${this.escapeHtml(rose.availability)}</span>
          </div>
          <p style="color:var(--text-muted); margin-bottom:1.5rem; font-size:0.95rem; line-height:1.6;">${this.escapeHtml(rose.description)}</p>
          
          <div style="background:var(--cream-bg); padding:1rem; border-radius:var(--radius-sm); margin-bottom:1.5rem; display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; font-size:0.85rem;">
            <div><strong>Fragrance:</strong> ${this.escapeHtml(rose.fragrance || 'High')}</div>
            <div><strong>Sunlight:</strong> ${this.escapeHtml(rose.sunlight || 'Full Sun')}</div>
            <div><strong>Height:</strong> ${this.escapeHtml(rose.height || '4 feet')}</div>
            <div><strong>Category:</strong> ${this.escapeHtml(rose.category)}</div>
          </div>

          <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.5rem;">
            <label style="font-weight:600; font-size:0.9rem;">Qty:</label>
            <div style="display:flex; align-items:center; border:1px solid rgba(30,58,43,0.2); border-radius:var(--radius-full); overflow:hidden; background:var(--cream-bg);">
              <button onclick="App.adjustRoseModalQty(-1)" style="border:none; background:none; padding:0.4rem 0.8rem; cursor:pointer; font-weight:700;">-</button>
              <span id="roseModalQty" style="padding:0 0.75rem; font-weight:600;">1</span>
              <button onclick="App.adjustRoseModalQty(1)" style="border:none; background:none; padding:0.4rem 0.8rem; cursor:pointer; font-weight:700;">+</button>
            </div>
          </div>

          <div style="display:flex; gap:1rem; flex-wrap:wrap;">
            <button onclick="App.openBookingModalForRose('${rose.name}')" class="btn btn-rose" style="flex-grow:1;">
              Inquire / Order Rose
            </button>
            <button onclick="App.toggleFavorite('${rose.id}')" class="btn btn-outline" style="display:flex; align-items:center; gap:0.4rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              ${isFav ? 'Saved' : 'Favorite'}
            </button>
          </div>
        </div>
      </div>
    `;

    this.openModal('roseDetailModal');
  },

  adjustRoseModalQty(delta) {
    const qtyElem = document.getElementById('roseModalQty');
    if (!qtyElem) return;
    let current = parseInt(qtyElem.innerText) || 1;
    current = Math.max(1, current + delta);
    qtyElem.innerText = current;
  },

  openBookingModalForRose(roseName) {
    this.closeModal('roseDetailModal');
    this.openBookingModal(null, `Inquiry regarding rose: ${roseName}`);
  },

  isFavorite(roseId) {
    if (!this.currentUser) return false;
    return (this.db.favorites || []).some(f => f.userId === this.currentUser.id && f.roseId === roseId);
  },

  async toggleFavorite(roseId) {
    if (!this.currentUser) {
      this.showToast('Please log in to save favorite roses!', 'error');
      this.openAuthModal('login');
      return;
    }

    if (!Array.isArray(this.db.favorites)) this.db.favorites = [];
    const idx = this.db.favorites.findIndex(f => f.userId === this.currentUser.id && f.roseId === roseId);
    if (idx >= 0) {
      this.db.favorites.splice(idx, 1);
      this.showToast('Removed from favorites', 'info');
    } else {
      this.db.favorites.push({ userId: this.currentUser.id, roseId: roseId });
      this.showToast('Added to favorites! 🌹', 'success');
    }

    await this.syncDatabase();
    this.renderRosesCatalog();
    this.renderFeaturedRoses();
    if (this.activeView === 'dashboard') this.renderUserDashboard();
    if (this.selectedRoseForModal && this.selectedRoseForModal.id === roseId) {
      this.openRoseDetailModal(roseId);
    }
  },

  renderServices() {
    const container = document.getElementById('servicesGrid');
    if (!container) return;

    container.innerHTML = (this.db.services || []).map(srv => `
      <div class="service-card">
        <img src="${this.escapeHtml(srv.image)}" alt="${this.escapeHtml(srv.name)}" class="service-img" loading="lazy">
        <div class="service-body">
          <h3 class="font-serif service-title">${this.escapeHtml(srv.name)}</h3>
          <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1rem;">${this.escapeHtml(srv.shortDescription)}</p>
          <ul class="service-features-list">
            ${(srv.features || []).map(f => `
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                ${this.escapeHtml(f)}
              </li>
            `).join('')}
          </ul>
          <div style="display:flex; align-items:center; justify-content:space-between; margin-top:1.5rem; padding-top:1rem; border-top:1px solid rgba(30,58,43,0.08);">
            <div>
              <span style="font-size:0.75rem; text-transform:uppercase; color:var(--text-muted); display:block;">Starting From</span>
              <span style="font-weight:700; color:var(--primary-green); font-size:1.1rem;">${this.escapeHtml(srv.startingPrice || '$150')}</span>
            </div>
            <button onclick="App.openBookingModal('${srv.id}', null)" class="btn btn-primary btn-sm">Request Service</button>
          </div>
        </div>
      </div>
    `).join('');
  },

  renderGallery() {
    const container = document.getElementById('galleryGrid');
    if (!container) return;

    let items = [...(this.db.gallery || [])];
    if (this.activeGalleryCategory !== 'All') {
      items = items.filter(g => g.category === this.activeGalleryCategory);
    }

    container.innerHTML = items.map((item, index) => `
      <div class="gallery-item" onclick="App.openLightbox(${index})">
        <img src="${this.escapeHtml(item.image)}" alt="${this.escapeHtml(item.title)}" loading="lazy">
        <div class="gallery-item-overlay">
          <span style="font-size:0.75rem; text-transform:uppercase; color:var(--rose-accent); font-weight:700;">${this.escapeHtml(item.category)}</span>
          <h4 class="font-serif" style="font-size:1.2rem; color:#FFF; margin-bottom:0.2rem;">${this.escapeHtml(item.title)}</h4>
          <p style="font-size:0.85rem; color:#CBD5E1; display:-webkit-box; -webkit-line-clamp:1; -webkit-box-orient:vertical; overflow:hidden;">${this.escapeHtml(item.caption)}</p>
        </div>
      </div>
    `).join('');
  },

  setGalleryCategory(category) {
    this.activeGalleryCategory = category;
    document.querySelectorAll('#galleryTabs .tab-btn').forEach(btn => {
      if (btn.innerText.trim() === category) btn.classList.add('active');
      else btn.classList.remove('active');
    });
    this.renderGallery();
  },

  openLightbox(index) {
    let items = [...(this.db.gallery || [])];
    if (this.activeGalleryCategory !== 'All') {
      items = items.filter(g => g.category === this.activeGalleryCategory);
    }

    if (index < 0 || index >= items.length) return;
    this.currentLightboxIndex = index;
    const item = items[index];

    const img = document.getElementById('lightboxImg');
    const title = document.getElementById('lightboxTitle');
    const caption = document.getElementById('lightboxCaption');
    const modal = document.getElementById('lightboxModal');

    if (img) img.src = item.image;
    if (title) title.innerText = item.title;
    if (caption) caption.innerText = `${item.category} • ${item.caption}`;

    modal?.classList.add('open');
  },

  navigateLightbox(direction) {
    let items = [...(this.db.gallery || [])];
    if (this.activeGalleryCategory !== 'All') {
      items = items.filter(g => g.category === this.activeGalleryCategory);
    }

    let newIndex = this.currentLightboxIndex + direction;
    if (newIndex < 0) newIndex = items.length - 1;
    if (newIndex >= items.length) newIndex = 0;

    this.openLightbox(newIndex);
  },

  closeLightbox() {
    document.getElementById('lightboxModal')?.classList.remove('open');
  },

  renderTestimonials() {
    const container = document.getElementById('testimonialsGrid');
    if (!container) return;

    container.innerHTML = (this.db.testimonials || []).map(tst => `
      <div class="testimonial-card">
        <div>
          <div class="star-rating">
            ${'★'.repeat(tst.rating)}${'☆'.repeat(5 - tst.rating)}
          </div>
          <p class="testimonial-quote">"${this.escapeHtml(tst.comment)}"</p>
        </div>
        <div class="testimonial-user">
          <img src="${this.escapeHtml(tst.avatar)}" alt="${this.escapeHtml(tst.name)}" class="testimonial-avatar">
          <div>
            <h4 style="font-weight:700; color:var(--primary-green); font-size:1rem;">${this.escapeHtml(tst.name)}</h4>
            <span style="font-size:0.8rem; color:var(--text-muted);">${this.escapeHtml(tst.role)}</span>
          </div>
        </div>
      </div>
    `).join('');
  },

  openBookingModal(serviceId = null, prefillMsg = '') {
    const modal = document.getElementById('bookingModal');
    if (!modal) return;

    const select = document.getElementById('bookingServiceSelect');
    if (select && serviceId) {
      select.value = serviceId;
    }

    const msgInput = document.getElementById('bookingMessageInput');
    if (msgInput && prefillMsg) {
      msgInput.value = prefillMsg;
    }

    if (this.currentUser) {
      const nameIn = document.getElementById('bookingNameInput');
      const emailIn = document.getElementById('bookingEmailInput');
      const phoneIn = document.getElementById('bookingPhoneInput');
      if (nameIn) nameIn.value = this.currentUser.name;
      if (emailIn) emailIn.value = this.currentUser.email;
      if (phoneIn && this.currentUser.phone) phoneIn.value = this.currentUser.phone;
    }

    this.openModal('bookingModal');
  },

  bindFormHandlers() {
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
      bookingForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        await this.handleBookingSubmit(bookingForm);
      });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        await this.handleContactSubmit(contactForm);
      });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        await this.handleLogin(loginForm);
      });
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
      signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        await this.handleSignup(signupForm);
      });
    }
  },

  async handleBookingSubmit(form) {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const serviceId = form.serviceId.value;
    const preferredDate = form.preferredDate.value;
    const preferredTime = form.preferredTime.value;
    const message = form.message.value.trim();

    if (!name || !email || !phone || !serviceId || !preferredDate) {
      this.showToast('Please fill in all required fields.', 'error');
      return;
    }

    const service = (this.db.services || []).find(s => s.id === serviceId);
    const newRequest = {
      id: `REQ-${Math.floor(1000 + Math.random() * 9000)}`,
      userId: this.currentUser ? this.currentUser.id : 'guest',
      userName: name,
      userEmail: email,
      userPhone: phone,
      serviceId: serviceId,
      serviceName: service ? service.name : 'General Service',
      preferredDate: preferredDate,
      preferredTime: preferredTime || 'Morning',
      message: message,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    if (!Array.isArray(this.db.service_requests)) this.db.service_requests = [];
    this.db.service_requests.unshift(newRequest);
    await this.syncDatabase();

    this.closeModal('bookingModal');
    form.reset();

    const confirmBody = document.getElementById('bookingConfirmBody');
    if (confirmBody) {
      confirmBody.innerHTML = `
        <div style="text-align:center; padding:1rem 0;">
          <div style="width:64px; height:64px; border-radius:50%; background:#DCFCE7; color:#15803D; font-size:2rem; display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem auto;">✓</div>
          <h3 class="font-serif" style="font-size:1.8rem; margin-bottom:0.5rem; color:var(--primary-green);">Request Received!</h3>
          <p style="color:var(--text-muted); margin-bottom:1.5rem;">Thank you, <strong>${this.escapeHtml(name)}</strong>. Your request reference number is <strong>${newRequest.id}</strong>.</p>
          <div style="background:var(--cream-bg); padding:1rem; border-radius:var(--radius-sm); text-align:left; font-size:0.9rem; margin-bottom:1.5rem;">
            <div><strong>Service:</strong> ${this.escapeHtml(newRequest.serviceName)}</div>
            <div><strong>Date:</strong> ${this.escapeHtml(newRequest.preferredDate)} (${this.escapeHtml(newRequest.preferredTime)})</div>
            <div><strong>Contact:</strong> ${this.escapeHtml(email)}</div>
          </div>
          <p style="font-size:0.85rem; color:var(--text-muted);">Our floral coordinator will contact you within 24 hours to confirm appointment details.</p>
        </div>
      `;
      this.openModal('bookingConfirmModal');
    }

    this.showToast('Service request submitted successfully!', 'success');
  },

  async handleContactSubmit(form) {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      this.showToast('Please complete all required fields.', 'error');
      return;
    }

    const newInquiry = {
      id: `INQ-${Math.floor(5000 + Math.random() * 5000)}`,
      name, email, phone,
      subject: subject || 'General Inquiry',
      message,
      status: 'New',
      createdAt: new Date().toISOString()
    };

    if (!Array.isArray(this.db.inquiries)) this.db.inquiries = [];
    this.db.inquiries.unshift(newInquiry);
    await this.syncDatabase();

    form.reset();
    this.showToast('Thank you! Your message has been sent to Rose Garden.', 'success');
  },

  openAuthModal(type = 'login') {
    if (type === 'login') {
      this.closeModal('signupModal');
      this.openModal('loginModal');
    } else if (type === 'signup') {
      this.closeModal('loginModal');
      this.openModal('signupModal');
    } else if (type === 'forgot') {
      this.closeModal('loginModal');
      this.openModal('forgotModal');
    }
  },

  async handleLogin(form) {
    const email = form.email.value.trim().toLowerCase();
    const password = form.password.value;

    const user = (this.db.users || []).find(u => u.email.toLowerCase() === email && u.password === password);

    if (user) {
      this.currentUser = user;
      localStorage.setItem('rosegarden_user', JSON.stringify(user));
      this.closeModal('loginModal');
      form.reset();
      this.renderHeaderAuth();
      this.showToast(`Welcome back, ${user.name}! 🌹`, 'success');

      if (user.role === 'admin') {
        window.location.hash = '#admin';
      } else {
        window.location.hash = '#dashboard';
      }
    } else {
      this.showToast('Invalid email or password. Try sarah@example.com / password123 or admin@rosegarden.com / admin128', 'error');
    }
  },

  async handleSignup(form) {
    const name = form.name.value.trim();
    const email = form.email.value.trim().toLowerCase();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      this.showToast('Passwords do not match.', 'error');
      return;
    }

    if ((this.db.users || []).some(u => u.email.toLowerCase() === email)) {
      this.showToast('An account with this email already exists.', 'error');
      return;
    }

    const newUser = {
      id: `usr-${Date.now()}`,
      name, email, password,
      role: 'customer',
      phone: form.phone ? form.phone.value : '',
      address: ''
    };

    if (!Array.isArray(this.db.users)) this.db.users = [];
    this.db.users.push(newUser);
    await this.syncDatabase();

    this.currentUser = newUser;
    localStorage.setItem('rosegarden_user', JSON.stringify(newUser));

    this.closeModal('signupModal');
    form.reset();
    this.renderHeaderAuth();
    this.showToast(`Account created! Welcome to Rose Garden, ${name}.`, 'success');
    window.location.hash = '#dashboard';
  },

  logout() {
    this.currentUser = null;
    localStorage.removeItem('rosegarden_user');
    this.renderHeaderAuth();
    this.showToast('You have been logged out.', 'info');
    window.location.hash = '#home';
  },

  renderUserDashboard() {
    if (!this.currentUser) return;

    document.getElementById('dashUserName').innerText = this.currentUser.name;
    document.getElementById('dashUserEmail').innerText = this.currentUser.email;
    document.getElementById('dashUserAvatar').innerText = this.currentUser.name.charAt(0).toUpperCase();

    const userFavs = (this.db.favorites || []).filter(f => f.userId === this.currentUser.id);
    const userReqs = (this.db.service_requests || []).filter(r => r.userId === this.currentUser.id || r.userEmail === this.currentUser.email);

    document.getElementById('statFavCount').innerText = userFavs.length;
    document.getElementById('statReqCount').innerText = userReqs.length;

    this.switchDashTab('favorites');
  },

  switchDashTab(tabName) {
    document.querySelectorAll('#dashMenu .dash-link').forEach(link => {
      if (link.dataset.tab === tabName) link.classList.add('active');
      else link.classList.remove('active');
    });

    document.querySelectorAll('.dash-tab-content').forEach(tab => tab.style.display = 'none');
    const target = document.getElementById(`dashTab-${tabName}`);
    if (target) target.style.display = 'block';

    if (tabName === 'favorites') this.renderDashFavorites();
    if (tabName === 'requests') this.renderDashRequests();
    if (tabName === 'profile') this.renderDashProfile();
  },

  renderDashFavorites() {
    const container = document.getElementById('dashFavsGrid');
    if (!container || !this.currentUser) return;

    const userFavIds = (this.db.favorites || []).filter(f => f.userId === this.currentUser.id).map(f => f.roseId);
    const favRoses = (this.db.roses || []).filter(r => userFavIds.includes(r.id));

    if (favRoses.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-icon">♡</div>
          <h3 class="font-serif">No Favorites Yet</h3>
          <p style="color:var(--text-muted); margin-bottom:1rem;">Explore our rose catalog and click the heart icon to save your favorite roses.</p>
          <a href="#roses" class="btn btn-primary btn-sm">Explore Roses Catalog</a>
        </div>
      `;
      return;
    }

    container.innerHTML = favRoses.map(rose => this.createRoseCardHtml(rose)).join('');
  },

  renderDashRequests() {
    const tbody = document.getElementById('dashRequestsTbody');
    if (!tbody || !this.currentUser) return;

    const reqs = (this.db.service_requests || []).filter(r => r.userId === this.currentUser.id || r.userEmail === this.currentUser.email);

    if (reqs.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" class="text-center" style="text-align:center; padding:2rem;">No service requests submitted yet.</td></tr>`;
      return;
    }

    tbody.innerHTML = reqs.map(r => `
      <tr>
        <td><strong>${this.escapeHtml(r.id)}</strong></td>
        <td>${this.escapeHtml(r.serviceName)}</td>
        <td>${this.escapeHtml(r.preferredDate)}</td>
        <td><span class="badge-status status-${(r.status || 'pending').toLowerCase()}">${this.escapeHtml(r.status)}</span></td>
        <td><span style="font-size:0.8rem; color:var(--text-muted);">${new Date(r.createdAt).toLocaleDateString()}</span></td>
      </tr>
    `).join('');
  },

  renderDashProfile() {
    if (!this.currentUser) return;
    document.getElementById('profileNameInput').value = this.currentUser.name || '';
    document.getElementById('profileEmailInput').value = this.currentUser.email || '';
    document.getElementById('profilePhoneInput').value = this.currentUser.phone || '';
    document.getElementById('profileAddressInput').value = this.currentUser.address || '';
  },

  async saveProfile(event) {
    event.preventDefault();
    if (!this.currentUser) return;

    this.currentUser.name = document.getElementById('profileNameInput').value.trim();
    this.currentUser.phone = document.getElementById('profilePhoneInput').value.trim();
    this.currentUser.address = document.getElementById('profileAddressInput').value.trim();

    const idx = (this.db.users || []).findIndex(u => u.id === this.currentUser.id);
    if (idx >= 0) this.db.users[idx] = this.currentUser;

    localStorage.setItem('rosegarden_user', JSON.stringify(this.currentUser));
    await this.syncDatabase();

    this.renderHeaderAuth();
    this.renderUserDashboard();
    this.showToast('Profile information updated successfully!', 'success');
  },

  renderAdminDashboard() {
    if (!this.currentUser || this.currentUser.role !== 'admin') return;

    document.getElementById('adminStatRoses').innerText = (this.db.roses || []).length;
    document.getElementById('adminStatServices').innerText = (this.db.services || []).length;
    document.getElementById('adminStatRequests').innerText = (this.db.service_requests || []).length;
    document.getElementById('adminStatInquiries').innerText = (this.db.inquiries || []).length;

    this.switchAdminTab('roses');
  },

  switchAdminTab(tabName) {
    document.querySelectorAll('#adminMenu .dash-link').forEach(link => {
      if (link.dataset.tab === tabName) link.classList.add('active');
      else link.classList.remove('active');
    });

    document.querySelectorAll('.admin-tab-content').forEach(tab => tab.style.display = 'none');
    const target = document.getElementById(`adminTab-${tabName}`);
    if (target) target.style.display = 'block';

    if (tabName === 'roses') this.renderAdminRosesTable();
    if (tabName === 'services') this.renderAdminServicesTable();
    if (tabName === 'gallery') this.renderAdminGalleryTable();
    if (tabName === 'requests') this.renderAdminRequestsTable();
    if (tabName === 'inquiries') this.renderAdminInquiriesTable();
    if (tabName === 'users') this.renderAdminUsersTable();
    if (tabName === 'testimonials') this.renderAdminTestimonialsTable();
  },

  renderAdminRosesTable() {
    const tbody = document.getElementById('adminRosesTbody');
    if (!tbody) return;

    tbody.innerHTML = (this.db.roses || []).map(r => `
      <tr>
        <td><img src="${this.escapeHtml(r.image)}" style="width:40px; height:40px; border-radius:6px; object-fit:cover;"></td>
        <td><strong>${this.escapeHtml(r.name)}</strong></td>
        <td>${this.escapeHtml(r.category)}</td>
        <td>$${(r.price || 0).toFixed(2)}</td>
        <td><span class="badge-status status-${r.availability === 'In Stock' ? 'confirmed' : 'pending'}">${this.escapeHtml(r.availability)}</span></td>
        <td>
          <div style="display:flex; gap:0.5rem;">
            <button onclick="App.openEditRoseModal('${r.id}')" class="btn btn-outline btn-sm" style="padding:0.3rem 0.6rem; font-size:0.75rem;">Edit</button>
            <button onclick="App.deleteRose('${r.id}')" class="btn btn-secondary btn-sm" style="padding:0.3rem 0.6rem; font-size:0.75rem; color:#DC2626;">Delete</button>
          </div>
        </td>
      </tr>
    `).join('');
  },

  openAddRoseModal() {
    document.getElementById('roseFormTitle').innerText = 'Add New Rose';
    document.getElementById('adminRoseId').value = '';
    document.getElementById('adminRoseForm').reset();
    this.openModal('adminRoseModal');
  },

  openEditRoseModal(roseId) {
    const rose = (this.db.roses || []).find(r => r.id === roseId);
    if (!rose) return;

    document.getElementById('roseFormTitle').innerText = 'Edit Rose';
    document.getElementById('adminRoseId').value = rose.id;
    document.getElementById('adminRoseName').value = rose.name;
    document.getElementById('adminRoseCategory').value = rose.category;
    document.getElementById('adminRosePrice').value = rose.price;
    document.getElementById('adminRoseAvail').value = rose.availability;
    document.getElementById('adminRoseImage').value = rose.image;
    document.getElementById('adminRoseShortDesc').value = rose.shortDescription;
    document.getElementById('adminRoseDesc').value = rose.description;
    document.getElementById('adminRoseFragrance').value = rose.fragrance || '';
    document.getElementById('adminRoseSunlight').value = rose.sunlight || '';

    this.openModal('adminRoseModal');
  },

  async saveRoseForm(event) {
    event.preventDefault();
    const id = document.getElementById('adminRoseId').value;
    const name = document.getElementById('adminRoseName').value.trim();
    const category = document.getElementById('adminRoseCategory').value;
    const price = parseFloat(document.getElementById('adminRosePrice').value) || 0;
    const availability = document.getElementById('adminRoseAvail').value;
    const image = document.getElementById('adminRoseImage').value.trim();
    const shortDesc = document.getElementById('adminRoseShortDesc').value.trim();
    const desc = document.getElementById('adminRoseDesc').value.trim();
    const fragrance = document.getElementById('adminRoseFragrance').value.trim();
    const sunlight = document.getElementById('adminRoseSunlight').value.trim();

    if (!name || !price || !image) {
      this.showToast('Please fill in required rose fields.', 'error');
      return;
    }

    if (!Array.isArray(this.db.roses)) this.db.roses = [];

    if (id) {
      const idx = this.db.roses.findIndex(r => r.id === id);
      if (idx >= 0) {
        this.db.roses[idx] = {
          ...this.db.roses[idx],
          name, category, price, availability, image,
          shortDescription: shortDesc, description: desc,
          fragrance, sunlight
        };
      }
      this.showToast('Rose updated successfully!', 'success');
    } else {
      const newRose = {
        id: `rose-${Date.now()}`,
        name, category, price, availability, image,
        shortDescription: shortDesc, description: desc,
        fragrance: fragrance || 'High', sunlight: sunlight || 'Full Sun',
        featured: false
      };
      this.db.roses.unshift(newRose);
      this.showToast('New Rose added to catalog!', 'success');
    }

    await this.syncDatabase();
    this.closeModal('adminRoseModal');
    this.renderAdminRosesTable();
    this.renderRosesCatalog();
  },

  async deleteRose(roseId) {
    if (!confirm('Are you sure you want to delete this rose from the catalog?')) return;
    this.db.roses = (this.db.roses || []).filter(r => r.id !== roseId);
    await this.syncDatabase();
    this.renderAdminRosesTable();
    this.renderRosesCatalog();
    this.showToast('Rose deleted from catalog.', 'info');
  },

  renderAdminServicesTable() {
    const tbody = document.getElementById('adminServicesTbody');
    if (!tbody) return;

    tbody.innerHTML = (this.db.services || []).map(s => `
      <tr>
        <td><img src="${this.escapeHtml(s.image)}" style="width:40px; height:40px; border-radius:6px; object-fit:cover;"></td>
        <td><strong>${this.escapeHtml(s.name)}</strong></td>
        <td>${this.escapeHtml(s.startingPrice)}</td>
        <td>${(s.features || []).length} features</td>
        <td>
          <button onclick="App.showToast('Service status active', 'info')" class="btn btn-outline btn-sm" style="padding:0.3rem 0.6rem; font-size:0.75rem;">Active</button>
        </td>
      </tr>
    `).join('');
  },

  renderAdminGalleryTable() {
    const tbody = document.getElementById('adminGalleryTbody');
    if (!tbody) return;

    tbody.innerHTML = (this.db.gallery || []).map(g => `
      <tr>
        <td><img src="${this.escapeHtml(g.image)}" style="width:40px; height:40px; border-radius:6px; object-fit:cover;"></td>
        <td><strong>${this.escapeHtml(g.title)}</strong></td>
        <td>${this.escapeHtml(g.category)}</td>
        <td>
          <button onclick="App.deleteGalleryItem('${g.id}')" class="btn btn-secondary btn-sm" style="padding:0.3rem 0.6rem; font-size:0.75rem; color:#DC2626;">Delete</button>
        </td>
      </tr>
    `).join('');
  },

  openAddGalleryModal() {
    document.getElementById('adminGalleryForm').reset();
    this.openModal('adminGalleryModal');
  },

  async saveGalleryForm(event) {
    event.preventDefault();
    const title = document.getElementById('adminGalTitle').value.trim();
    const category = document.getElementById('adminGalCategory').value;
    const image = document.getElementById('adminGalImage').value.trim();
    const caption = document.getElementById('adminGalCaption').value.trim();

    if (!title || !image) {
      this.showToast('Title and Image URL are required.', 'error');
      return;
    }

    const newItem = {
      id: `gal-${Date.now()}`,
      title, category, image, caption
    };

    if (!Array.isArray(this.db.gallery)) this.db.gallery = [];
    this.db.gallery.unshift(newItem);
    await this.syncDatabase();

    this.closeModal('adminGalleryModal');
    this.renderAdminGalleryTable();
    this.renderGallery();
    this.showToast('New image added to gallery!', 'success');
  },

  async deleteGalleryItem(id) {
    if (!confirm('Delete this gallery photo?')) return;
    this.db.gallery = (this.db.gallery || []).filter(g => g.id !== id);
    await this.syncDatabase();
    this.renderAdminGalleryTable();
    this.renderGallery();
    this.showToast('Gallery image removed.', 'info');
  },

  renderAdminRequestsTable() {
    const tbody = document.getElementById('adminRequestsTbody');
    if (!tbody) return;

    tbody.innerHTML = (this.db.service_requests || []).map(r => `
      <tr>
        <td><strong>${this.escapeHtml(r.id)}</strong></td>
        <td>${this.escapeHtml(r.userName)}<br><span style="font-size:0.75rem; color:var(--text-muted);">${this.escapeHtml(r.userEmail)}</span></td>
        <td>${this.escapeHtml(r.serviceName)}</td>
        <td>${this.escapeHtml(r.preferredDate)}</td>
        <td>
          <select onchange="App.updateRequestStatus('${r.id}', this.value)" class="form-select" style="padding:0.2rem 0.5rem; font-size:0.8rem;">
            <option value="Pending" ${r.status === 'Pending' ? 'selected' : ''}>Pending</option>
            <option value="Confirmed" ${r.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
            <option value="Completed" ${r.status === 'Completed' ? 'selected' : ''}>Completed</option>
          </select>
        </td>
      </tr>
    `).join('');
  },

  async updateRequestStatus(id, newStatus) {
    const req = (this.db.service_requests || []).find(r => r.id === id);
    if (req) {
      req.status = newStatus;
      await this.syncDatabase();
      this.showToast(`Request ${id} marked as ${newStatus}`, 'success');
    }
  },

  renderAdminInquiriesTable() {
    const tbody = document.getElementById('adminInquiriesTbody');
    if (!tbody) return;

    tbody.innerHTML = (this.db.inquiries || []).map(inq => `
      <tr>
        <td><strong>${this.escapeHtml(inq.name)}</strong><br><span style="font-size:0.75rem; color:var(--text-muted);">${this.escapeHtml(inq.email)}</span></td>
        <td>${this.escapeHtml(inq.subject)}</td>
        <td style="max-width:300px;">${this.escapeHtml(inq.message)}</td>
        <td><span class="badge-status status-${inq.status === 'New' ? 'new' : 'confirmed'}">${this.escapeHtml(inq.status)}</span></td>
        <td>
          <button onclick="App.toggleInquiryStatus('${inq.id}')" class="btn btn-outline btn-sm" style="padding:0.3rem 0.6rem; font-size:0.75rem;">
            ${inq.status === 'New' ? 'Mark Replied' : 'Mark New'}
          </button>
        </td>
      </tr>
    `).join('');
  },

  async toggleInquiryStatus(id) {
    const inq = (this.db.inquiries || []).find(i => i.id === id);
    if (inq) {
      inq.status = inq.status === 'New' ? 'Replied' : 'New';
      await this.syncDatabase();
      this.renderAdminInquiriesTable();
      this.showToast('Inquiry status updated', 'info');
    }
  },

  renderAdminUsersTable() {
    const tbody = document.getElementById('adminUsersTbody');
    if (!tbody) return;

    tbody.innerHTML = (this.db.users || []).map(u => `
      <tr>
        <td><strong>${this.escapeHtml(u.name)}</strong></td>
        <td>${this.escapeHtml(u.email)}</td>
        <td><span class="badge-status status-${u.role === 'admin' ? 'confirmed' : 'completed'}">${this.escapeHtml(u.role)}</span></td>
        <td>${this.escapeHtml(u.phone || 'N/A')}</td>
      </tr>
    `).join('');
  },

  renderAdminTestimonialsTable() {
    const tbody = document.getElementById('adminTestimonialsTbody');
    if (!tbody) return;

    tbody.innerHTML = (this.db.testimonials || []).map(t => `
      <tr>
        <td><img src="${this.escapeHtml(t.avatar)}" style="width:36px; height:36px; border-radius:50%; object-fit:cover;"></td>
        <td><strong>${this.escapeHtml(t.name)}</strong></td>
        <td>${this.escapeHtml(t.role)}</td>
        <td>${'★'.repeat(t.rating)}</td>
        <td>
          <button onclick="App.deleteTestimonial('${t.id}')" class="btn btn-secondary btn-sm" style="padding:0.3rem 0.6rem; font-size:0.75rem; color:#DC2626;">Delete</button>
        </td>
      </tr>
    `).join('');
  },

  async deleteTestimonial(id) {
    if (!confirm('Delete testimonial?')) return;
    this.db.testimonials = (this.db.testimonials || []).filter(t => t.id !== id);
    await this.syncDatabase();
    this.renderAdminTestimonialsTable();
    this.renderTestimonials();
    this.showToast('Testimonial removed.', 'info');
  },

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('open');
      this.activeModal = modalId;
    }
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('open');
    }
  },

  closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
  },

  showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span>${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
      <div>${this.escapeHtml(message)}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  },

  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
