using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JewelleryManagement.Model;

namespace JewelleryManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class feedbacksController : ControllerBase
    {
        private readonly JewelleryContext _context;

        public feedbacksController(JewelleryContext context)
        {
            _context = context;
        }

        // GET: api/feedbacks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<feedback>>> Getfeedbacks()
        {
            return await _context.feedbacks.ToListAsync();
        }

        // GET: api/feedbacks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<feedback>> Getfeedback(int id)
        {
            var feedback = await _context.feedbacks.FindAsync(id);

            if (feedback == null)
            {
                return NotFound();
            }

            return feedback;
        }

        // PUT: api/feedbacks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Putfeedback(int id, feedback feedback)
        {
            if (id != feedback.fid)
            {
                return BadRequest();
            }

            _context.Entry(feedback).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!feedbackExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/feedbacks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<feedback>> Postfeedback(feedback feedback)
        {
            _context.feedbacks.Add(feedback);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getfeedback", new { id = feedback.fid }, feedback);
        }

        // DELETE: api/feedbacks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deletefeedback(int id)
        {
            var feedback = await _context.feedbacks.FindAsync(id);
            if (feedback == null)
            {
                return NotFound();
            }

            _context.feedbacks.Remove(feedback);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool feedbackExists(int id)
        {
            return _context.feedbacks.Any(e => e.fid == id);
        }
    }
}
